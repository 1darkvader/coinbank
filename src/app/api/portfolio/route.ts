import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        portfolios: {
          include: {
            assets: true
          }
        }
      }
    })

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: {
        portfolios: user.portfolios,
        totalValue: user.portfolios.reduce((sum, portfolio) => sum + portfolio.totalValue, 0)
      }
    })

  } catch (error) {
    console.error('Portfolio fetch error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { name, assets } = await request.json()

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      )
    }

    // Calculate total value
    const totalValue = assets?.reduce((sum: number, asset: { amount: number; price: number }) => sum + (asset.amount * asset.price), 0) || 0

    const portfolio = await prisma.portfolio.create({
      data: {
        userId: user.id,
        name: name || 'New Portfolio',
        totalValue,
        assets: {
          create: assets?.map((asset: { symbol: string; name: string; amount: number; price: number }) => ({
            symbol: asset.symbol,
            name: asset.name,
            amount: asset.amount,
            price: asset.price,
            value: asset.amount * asset.price,
            allocation: (asset.amount * asset.price) / totalValue * 100
          })) || []
        }
      },
      include: {
        assets: true
      }
    })

    return NextResponse.json({
      success: true,
      data: portfolio
    })

  } catch (error) {
    console.error('Portfolio creation error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}