from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse  # 👈 Add this import
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('', lambda request: HttpResponse("Welcome to the Jobi API 👋")),  # 👈 Add this line
    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.urls')),
    path('api/accounts/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/accounts/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
