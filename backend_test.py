#!/usr/bin/env python3
"""
CoinBank Crypto Banking Platform - API Testing Suite
Tests the Next.js API routes and database functionality
"""

import requests
import json
import sys
from datetime import datetime

class CoinBankAPITester:
    def __init__(self, base_url="http://localhost:3000"):
        self.base_url = base_url
        self.session = requests.Session()
        self.tests_run = 0
        self.tests_passed = 0
        self.test_user_email = f"test_user_{datetime.now().strftime('%H%M%S')}@coinbank.test"
        
    def log_test(self, name, success, message=""):
        """Log test results"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name} - PASSED")
        else:
            print(f"❌ {name} - FAILED: {message}")
        
    def test_homepage_load(self):
        """Test if homepage loads correctly"""
        try:
            response = self.session.get(f"{self.base_url}/")
            success = response.status_code == 200 and "CoinBank" in response.text
            self.log_test("Homepage Load", success, f"Status: {response.status_code}")
            return success
        except Exception as e:
            self.log_test("Homepage Load", False, str(e))
            return False
    
    def test_user_registration(self):
        """Test user registration API"""
        try:
            user_data = {
                "name": "Test User",
                "email": self.test_user_email,
                "password": "TestPass123!"
            }
            
            response = self.session.post(
                f"{self.base_url}/api/auth/register",
                json=user_data,
                headers={"Content-Type": "application/json"}
            )
            
            success = response.status_code == 200
            if success:
                data = response.json()
                success = "user" in data and data["user"]["email"] == self.test_user_email
                
            self.log_test("User Registration", success, 
                         f"Status: {response.status_code}, Response: {response.text[:100]}")
            return success
        except Exception as e:
            self.log_test("User Registration", False, str(e))
            return False
    
    def test_duplicate_registration(self):
        """Test duplicate user registration handling"""
        try:
            user_data = {
                "name": "Test User Duplicate",
                "email": self.test_user_email,  # Same email as before
                "password": "TestPass123!"
            }
            
            response = self.session.post(
                f"{self.base_url}/api/auth/register",
                json=user_data,
                headers={"Content-Type": "application/json"}
            )
            
            # Should return 409 for duplicate user
            success = response.status_code == 409
            self.log_test("Duplicate Registration Prevention", success, 
                         f"Status: {response.status_code}")
            return success
        except Exception as e:
            self.log_test("Duplicate Registration Prevention", False, str(e))
            return False
    
    def test_invalid_registration_data(self):
        """Test registration with invalid data"""
        test_cases = [
            {"name": "", "email": "test@test.com", "password": "TestPass123!"},  # Empty name
            {"name": "Test", "email": "invalid-email", "password": "TestPass123!"},  # Invalid email
            {"name": "Test", "email": "test2@test.com", "password": "weak"},  # Weak password
        ]
        
        all_passed = True
        for i, invalid_data in enumerate(test_cases):
            try:
                response = self.session.post(
                    f"{self.base_url}/api/auth/register",
                    json=invalid_data,
                    headers={"Content-Type": "application/json"}
                )
                
                success = response.status_code == 400
                if not success:
                    all_passed = False
                    
                self.log_test(f"Invalid Registration Data #{i+1}", success, 
                             f"Status: {response.status_code}")
            except Exception as e:
                self.log_test(f"Invalid Registration Data #{i+1}", False, str(e))
                all_passed = False
                
        return all_passed
    
    def test_nextauth_endpoints(self):
        """Test NextAuth endpoints"""
        try:
            # Test NextAuth configuration endpoint
            response = self.session.get(f"{self.base_url}/api/auth/providers")
            success = response.status_code == 200
            
            if success:
                data = response.json()
                # Should have Google, GitHub, and Credentials providers
                expected_providers = ["google", "github", "credentials"]
                success = all(provider in data for provider in expected_providers)
                
            self.log_test("NextAuth Providers", success, 
                         f"Status: {response.status_code}")
            return success
        except Exception as e:
            self.log_test("NextAuth Providers", False, str(e))
            return False
    
    def test_page_routes(self):
        """Test if key pages are accessible"""
        pages_to_test = [
            "/dashboard",
            "/auth/signin", 
            "/auth/signup",
            "/banking/hold",
            "/banking/earn",
            "/banking/transact",
            "/banking/grow",
            "/banking/borrow"
        ]
        
        all_passed = True
        for page in pages_to_test:
            try:
                response = self.session.get(f"{self.base_url}{page}")
                success = response.status_code == 200
                if not success:
                    all_passed = False
                    
                self.log_test(f"Page Route: {page}", success, 
                             f"Status: {response.status_code}")
            except Exception as e:
                self.log_test(f"Page Route: {page}", False, str(e))
                all_passed = False
                
        return all_passed
    
    def test_database_connection(self):
        """Test database connection by attempting registration"""
        try:
            # This indirectly tests database connection
            test_email = f"db_test_{datetime.now().strftime('%H%M%S%f')}@test.com"
            user_data = {
                "name": "DB Test User",
                "email": test_email,
                "password": "TestPass123!"
            }
            
            response = self.session.post(
                f"{self.base_url}/api/auth/register",
                json=user_data,
                headers={"Content-Type": "application/json"}
            )
            
            success = response.status_code == 200
            self.log_test("Database Connection", success, 
                         f"Status: {response.status_code}")
            return success
        except Exception as e:
            self.log_test("Database Connection", False, str(e))
            return False
    
    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting CoinBank API Testing Suite")
        print("=" * 50)
        
        # Test basic connectivity
        if not self.test_homepage_load():
            print("❌ Homepage not loading - stopping tests")
            return False
            
        # Test database and API functionality
        self.test_database_connection()
        self.test_user_registration()
        self.test_duplicate_registration()
        self.test_invalid_registration_data()
        self.test_nextauth_endpoints()
        self.test_page_routes()
        
        # Print summary
        print("\n" + "=" * 50)
        print(f"📊 Test Results: {self.tests_passed}/{self.tests_run} tests passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
            return True
        else:
            print(f"⚠️  {self.tests_run - self.tests_passed} tests failed")
            return False

def main():
    """Main test execution"""
    tester = CoinBankAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())