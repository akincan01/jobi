from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from rest_framework import status

class UserRegistrationTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = '/api/accounts/register/'
        self.valid_payload = {
            "username": "testuser",
            "password": "testpassword123"
        }

    def test_register_user_successfully(self):
        response = self.client.post(self.url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.filter(username='testuser').exists())

    def test_missing_username_fails(self):
        payload = {"password": "testpassword123"}
        response = self.client.post(self.url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('username', response.data)

    def test_missing_password_fails(self):
        payload = {"username": "testuser"}
        response = self.client.post(self.url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('password', response.data)

    def test_duplicate_username_fails(self):
        User.objects.create_user(username='testuser', password='somepassword')
        response = self.client.post(self.url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('username', response.data)

# Test cases for user login functionality 
class UserLoginTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.login_url = '/api/accounts/token/'
        self.username = 'testuser'
        self.password = 'testpassword123'
        self.user = User.objects.create_user(username=self.username, password=self.password)

    def test_login_successful(self):
        payload = {
            'username': self.username,
            'password': self.password
        }
        response = self.client.post(self.login_url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)

    def test_login_with_wrong_password(self):
        payload = {
            'username': self.username,
            'password': 'wrongpassword'
        }
        response = self.client.post(self.login_url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertIn('detail', response.data)

    def test_login_with_nonexistent_user(self):
        payload = {
            'username': 'nouser',
            'password': 'irrelevant'
        }
        response = self.client.post(self.login_url, payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertIn('detail', response.data)
