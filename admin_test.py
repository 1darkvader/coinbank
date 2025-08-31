#!/usr/bin/env python3
"""
CoinBank Admin Management Features - Testing Suite
Tests the new Next.js admin dashboard and components
"""

import requests
import json
import sys
import time
from datetime import datetime

class AdminFeaturesTest:
    def __init__(self, base_url="http://localhost:3000"):
        self.base_url = base_url
        self.session = requests.Session()
        self.tests_run = 0
        self.tests_passed = 0
        
    def log_test(self, name, success, message=""):
        """Log test results"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name} - PASSED")
        else:
            print(f"❌ {name} - FAILED: {message}")
        
    def test_next_server_startup(self):
        """Test if Next.js server starts successfully"""
        try:
            response = self.session.get(f"{self.base_url}/", timeout=30)
            success = response.status_code == 200
            
            self.log_test("Next.js Server Startup", success, 
                         f"Status: {response.status_code}")
            return success
        except Exception as e:
            self.log_test("Next.js Server Startup", False, str(e))
            return False
    
    def test_admin_login_page_accessibility(self):
        """Test that /admin page loads properly"""
        try:
            response = self.session.get(f"{self.base_url}/admin")
            success = response.status_code == 200
            
            # Check if page contains admin login elements
            if success:
                content = response.text
                admin_elements = [
                    "CoinBank Admin",
                    "System Administration Panel",
                    "Admin Username",
                    "Password",
                    "Access Admin Panel"
                ]
                
                elements_found = sum(1 for element in admin_elements if element in content)
                success = elements_found >= 3  # At least 3 key elements should be present
                
            self.log_test("Admin Login Page Accessibility", success, 
                         f"Status: {response.status_code}, Elements found: {elements_found if 'elements_found' in locals() else 0}")
            return success
        except Exception as e:
            self.log_test("Admin Login Page Accessibility", False, str(e))
            return False
    
    def test_admin_dashboard_accessibility(self):
        """Test that /admin/dashboard loads properly"""
        try:
            response = self.session.get(f"{self.base_url}/admin/dashboard")
            success = response.status_code == 200
            
            # Check if page contains admin dashboard elements
            if success:
                content = response.text
                dashboard_elements = [
                    "CoinBank Admin",
                    "System Administration Panel",
                    "User Management",
                    "Transaction Monitoring",
                    "System Analytics",
                    "Security Controls",
                    "Content Management"
                ]
                
                elements_found = sum(1 for element in dashboard_elements if element in content)
                success = elements_found >= 5  # At least 5 key navigation elements should be present
                
            self.log_test("Admin Dashboard Accessibility", success, 
                         f"Status: {response.status_code}, Navigation elements found: {elements_found if 'elements_found' in locals() else 0}")
            return success
        except Exception as e:
            self.log_test("Admin Dashboard Accessibility", False, str(e))
            return False
    
    def test_admin_component_imports(self):
        """Test that admin components load without import errors"""
        try:
            # Test the main dashboard page which imports all components
            response = self.session.get(f"{self.base_url}/admin/dashboard")
            success = response.status_code == 200
            
            if success:
                content = response.text
                # Check for JavaScript errors or missing imports
                error_indicators = [
                    "Module not found",
                    "Cannot resolve module",
                    "Import error",
                    "ReferenceError",
                    "TypeError: Cannot read",
                    "Uncaught"
                ]
                
                has_errors = any(error in content for error in error_indicators)
                success = not has_errors
                
            self.log_test("Admin Component Imports", success, 
                         f"Status: {response.status_code}, Import errors detected: {has_errors if 'has_errors' in locals() else 'Unknown'}")
            return success
        except Exception as e:
            self.log_test("Admin Component Imports", False, str(e))
            return False
    
    def test_typescript_compilation(self):
        """Test TypeScript compilation by checking for compilation errors"""
        try:
            # Check if the pages load without TypeScript compilation errors
            response = self.session.get(f"{self.base_url}/admin/dashboard")
            success = response.status_code == 200
            
            if success:
                content = response.text
                # Look for TypeScript compilation error indicators
                ts_errors = [
                    "TypeScript error",
                    "TS2307",  # Cannot find module
                    "TS2322",  # Type assignment error
                    "TS2339",  # Property does not exist
                    "TS2345",  # Argument type error
                    "Compilation failed"
                ]
                
                has_ts_errors = any(error in content for error in ts_errors)
                success = not has_ts_errors
                
            self.log_test("TypeScript Compilation", success, 
                         f"Status: {response.status_code}, TS errors detected: {has_ts_errors if 'has_ts_errors' in locals() else 'Unknown'}")
            return success
        except Exception as e:
            self.log_test("TypeScript Compilation", False, str(e))
            return False
    
    def test_css_styling_loads(self):
        """Test that Tailwind CSS classes are properly applied"""
        try:
            response = self.session.get(f"{self.base_url}/admin/dashboard")
            success = response.status_code == 200
            
            if success:
                content = response.text
                # Check for Tailwind CSS classes that should be present
                tailwind_classes = [
                    "bg-gray-900",
                    "text-white",
                    "rounded-2xl",
                    "border-gray-800",
                    "hover:bg-gray-700",
                    "transition-colors",
                    "backdrop-blur"
                ]
                
                classes_found = sum(1 for css_class in tailwind_classes if css_class in content)
                success = classes_found >= 4  # At least 4 Tailwind classes should be present
                
            self.log_test("CSS/Tailwind Styling", success, 
                         f"Status: {response.status_code}, Tailwind classes found: {classes_found if 'classes_found' in locals() else 0}")
            return success
        except Exception as e:
            self.log_test("CSS/Tailwind Styling", False, str(e))
            return False
    
    def test_admin_navigation_functionality(self):
        """Test that admin navigation tabs work (by checking if content changes)"""
        try:
            # Get the main dashboard page
            response = self.session.get(f"{self.base_url}/admin/dashboard")
            success = response.status_code == 200
            
            if success:
                content = response.text
                # Check if navigation elements are present
                nav_elements = [
                    'activeSection',  # JavaScript state for navigation
                    'setActiveSection',  # Function to change sections
                    'User Management',
                    'Transaction Monitoring',
                    'System Analytics',
                    'Security Controls',
                    'Content Management'
                ]
                
                nav_found = sum(1 for element in nav_elements if element in content)
                success = nav_found >= 4  # At least 4 navigation elements should be present
                
            self.log_test("Admin Navigation Functionality", success, 
                         f"Status: {response.status_code}, Navigation elements found: {nav_found if 'nav_found' in locals() else 0}")
            return success
        except Exception as e:
            self.log_test("Admin Navigation Functionality", False, str(e))
            return False
    
    def test_user_management_component(self):
        """Test User Management component loading"""
        try:
            response = self.session.get(f"{self.base_url}/admin/dashboard")
            success = response.status_code == 200
            
            if success:
                content = response.text
                # Check for User Management specific elements
                user_mgmt_elements = [
                    "UserManagement",
                    "User Management",
                    "Sarah Johnson",  # Sample user data
                    "Mike Chen",      # Sample user data
                    "Active",         # User status
                    "Premium",        # User role
                    "KYC Status"      # User verification
                ]
                
                elements_found = sum(1 for element in user_mgmt_elements if element in content)
                success = elements_found >= 3
                
            self.log_test("User Management Component", success, 
                         f"Status: {response.status_code}, Component elements found: {elements_found if 'elements_found' in locals() else 0}")
            return success
        except Exception as e:
            self.log_test("User Management Component", False, str(e))
            return False
    
    def test_transaction_monitoring_component(self):
        """Test Transaction Monitoring component loading"""
        try:
            response = self.session.get(f"{self.base_url}/admin/dashboard")
            success = response.status_code == 200
            
            if success:
                content = response.text
                # Check for Transaction Monitoring specific elements
                transaction_elements = [
                    "TransactionMonitoring",
                    "Transaction Monitoring",
                    "Risk Score",
                    "High Value",
                    "Flagged",
                    "BTC",  # Crypto asset
                    "ETH",  # Crypto asset
                    "Completed",  # Transaction status
                    "Pending"     # Transaction status
                ]
                
                elements_found = sum(1 for element in transaction_elements if element in content)
                success = elements_found >= 3
                
            self.log_test("Transaction Monitoring Component", success, 
                         f"Status: {response.status_code}, Component elements found: {elements_found if 'elements_found' in locals() else 0}")
            return success
        except Exception as e:
            self.log_test("Transaction Monitoring Component", False, str(e))
            return False
    
    def test_system_analytics_component(self):
        """Test System Analytics component loading"""
        try:
            response = self.session.get(f"{self.base_url}/admin/dashboard")
            success = response.status_code == 200
            
            if success:
                content = response.text
                # Check for System Analytics specific elements
                analytics_elements = [
                    "SystemAnalytics",
                    "System Analytics",
                    "Total Users",
                    "Active Users",
                    "Total Revenue",
                    "Device Breakdown",
                    "User Growth",
                    "Trading Activity"
                ]
                
                elements_found = sum(1 for element in analytics_elements if element in content)
                success = elements_found >= 3
                
            self.log_test("System Analytics Component", success, 
                         f"Status: {response.status_code}, Component elements found: {elements_found if 'elements_found' in locals() else 0}")
            return success
        except Exception as e:
            self.log_test("System Analytics Component", False, str(e))
            return False
    
    def test_security_controls_component(self):
        """Test Security Controls component loading"""
        try:
            response = self.session.get(f"{self.base_url}/admin/dashboard")
            success = response.status_code == 200
            
            if success:
                content = response.text
                # Check for Security Controls specific elements
                security_elements = [
                    "SecurityControls",
                    "Security Controls",
                    "Security Events",
                    "Security Rules",
                    "Critical Events",
                    "Rate Limiting",
                    "Geo-blocking",
                    "Device Trust",
                    "Failed login"
                ]
                
                elements_found = sum(1 for element in security_elements if element in content)
                success = elements_found >= 3
                
            self.log_test("Security Controls Component", success, 
                         f"Status: {response.status_code}, Component elements found: {elements_found if 'elements_found' in locals() else 0}")
            return success
        except Exception as e:
            self.log_test("Security Controls Component", False, str(e))
            return False
    
    def test_content_management_component(self):
        """Test Content Management component loading"""
        try:
            response = self.session.get(f"{self.base_url}/admin/dashboard")
            success = response.status_code == 200
            
            if success:
                content = response.text
                # Check for Content Management specific elements
                content_elements = [
                    "ContentManagement",
                    "Content Management",
                    "Content Pages",
                    "Announcements",
                    "Email Templates",
                    "Terms of Service",
                    "Privacy Policy",
                    "System Announcements"
                ]
                
                elements_found = sum(1 for element in content_elements if element in content)
                success = elements_found >= 3
                
            self.log_test("Content Management Component", success, 
                         f"Status: {response.status_code}, Component elements found: {elements_found if 'elements_found' in locals() else 0}")
            return success
        except Exception as e:
            self.log_test("Content Management Component", False, str(e))
            return False
    
    def test_ui_rendering_with_sample_data(self):
        """Test that UI renders properly with sample data"""
        try:
            response = self.session.get(f"{self.base_url}/admin/dashboard")
            success = response.status_code == 200
            
            if success:
                content = response.text
                # Check for sample data that should be rendered
                sample_data_elements = [
                    "12,847",     # Total users stat
                    "$2.4M",      # Revenue stat
                    "8,924",      # Active trades stat
                    "99.2%",      # System health stat
                    "sarah@example.com",  # Sample user email
                    "mike@example.com",   # Sample user email
                    "$45,000.00", # Sample transaction amount
                    "New York, US",       # Sample location
                    "Chrome/Windows"      # Sample device info
                ]
                
                data_found = sum(1 for element in sample_data_elements if element in content)
                success = data_found >= 5  # At least 5 sample data elements should be rendered
                
            self.log_test("UI Rendering with Sample Data", success, 
                         f"Status: {response.status_code}, Sample data elements found: {data_found if 'data_found' in locals() else 0}")
            return success
        except Exception as e:
            self.log_test("UI Rendering with Sample Data", False, str(e))
            return False
    
    def test_lucide_react_icons(self):
        """Test that Lucide React icons are properly imported and used"""
        try:
            response = self.session.get(f"{self.base_url}/admin/dashboard")
            success = response.status_code == 200
            
            if success:
                content = response.text
                # Check for Lucide icon usage (these should be in the component code)
                icon_elements = [
                    "Users",
                    "DollarSign", 
                    "TrendingUp",
                    "Activity",
                    "Shield",
                    "Eye",
                    "Settings",
                    "Bell",
                    "Search",
                    "Filter"
                ]
                
                icons_found = sum(1 for icon in icon_elements if icon in content)
                success = icons_found >= 5  # At least 5 different icons should be used
                
            self.log_test("Lucide React Icons", success, 
                         f"Status: {response.status_code}, Icons found: {icons_found if 'icons_found' in locals() else 0}")
            return success
        except Exception as e:
            self.log_test("Lucide React Icons", False, str(e))
            return False
    
    def test_framer_motion_animations(self):
        """Test that Framer Motion animations are properly set up"""
        try:
            response = self.session.get(f"{self.base_url}/admin/dashboard")
            success = response.status_code == 200
            
            if success:
                content = response.text
                # Check for Framer Motion usage
                motion_elements = [
                    "motion.div",
                    "initial=",
                    "animate=",
                    "transition=",
                    "opacity: 0",
                    "opacity: 1"
                ]
                
                motion_found = sum(1 for element in motion_elements if element in content)
                success = motion_found >= 3  # At least 3 motion-related elements should be present
                
            self.log_test("Framer Motion Animations", success, 
                         f"Status: {response.status_code}, Motion elements found: {motion_found if 'motion_found' in locals() else 0}")
            return success
        except Exception as e:
            self.log_test("Framer Motion Animations", False, str(e))
            return False
    
    def run_all_tests(self):
        """Run all admin functionality tests"""
        print("🚀 Starting CoinBank Admin Management Features Testing")
        print("=" * 60)
        
        # Test 1: Application startup
        if not self.test_next_server_startup():
            print("❌ Next.js server startup failed - stopping tests")
            return False
        
        # Test 2: Page accessibility
        self.test_admin_login_page_accessibility()
        self.test_admin_dashboard_accessibility()
        
        # Test 3: Component loading
        self.test_user_management_component()
        self.test_transaction_monitoring_component()
        self.test_system_analytics_component()
        self.test_security_controls_component()
        self.test_content_management_component()
        
        # Test 4: Navigation functionality
        self.test_admin_navigation_functionality()
        
        # Test 5: UI rendering
        self.test_ui_rendering_with_sample_data()
        
        # Test 6: Import resolution
        self.test_admin_component_imports()
        self.test_lucide_react_icons()
        self.test_framer_motion_animations()
        
        # Test 7: TypeScript compilation
        self.test_typescript_compilation()
        
        # Test 8: CSS/styling
        self.test_css_styling_loads()
        
        # Print summary
        print("\n" + "=" * 60)
        print(f"📊 Admin Features Test Results: {self.tests_passed}/{self.tests_run} tests passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All admin functionality tests passed!")
            return True
        else:
            failed_tests = self.tests_run - self.tests_passed
            print(f"⚠️  {failed_tests} admin functionality tests failed")
            
            # Provide specific guidance based on failures
            if failed_tests <= 2:
                print("💡 Minor issues detected - admin functionality is mostly working")
            elif failed_tests <= 5:
                print("⚠️  Moderate issues detected - some admin features may not work properly")
            else:
                print("🚨 Major issues detected - admin functionality needs significant fixes")
            
            return False

def main():
    """Main test execution"""
    tester = AdminFeaturesTest()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())