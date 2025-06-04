from django.test import TestCase

# Create your tests here.
from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from rest_framework import status
from .models import UserProfile

class UserRegistrationTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.register_url = '/api/accounts/register/'
        self.valid_payload = {
            "username": "testuser",
            "password": "testpassword123",
            "role": "applicant"
        }

    def test_register_user_creates_user(self):
        response = self.client.post(self.register_url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.filter(username='testuser').exists())

    def test_register_user_creates_profile(self):
        self.client.post(self.register_url, self.valid_payload, format='json')
        user = User.objects.get(username='testuser')
        self.assertTrue(UserProfile.objects.filter(user=user).exists())

    def test_profile_has_correct_role(self):
        self.client.post(self.register_url, self.valid_payload, format='json')
        profile = UserProfile.objects.get(user__username='testuser')
        self.assertEqual(profile.role, 'applicant')
