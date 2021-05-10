from django.urls import path
from .views import CreateUserView, UserUpdateDetailsView, UserLoginView

urlpatterns = [
    path('registration/', CreateUserView.as_view(), name="registration_user"),
    path('registration/<username>/', UserUpdateDetailsView.as_view(), name="user_update_detail"),
    path('login/', UserLoginView.as_view(), name="user_login"),
]
