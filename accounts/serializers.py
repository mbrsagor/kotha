import datetime

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.utils import datetime_to_epoch

from rest_framework import serializers
from .models import User

SUPERUSER_LIFETIME = datetime.timedelta(minutes=30)


# User registration serializer
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            phone_number=validated_data['phone_number'],
            is_owner=validated_data['is_owner'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            password=validated_data['password']
        )

        return user

    class Meta:
        model = User
        fields = [
            'id', 'username', 'email', 'phone_number', 'first_name', 'last_name',
            'password', 'is_owner', 'is_staff', 'is_manager', 'created_at'
        ]


# User login serializer
class CustomJwtLoginSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(CustomJwtLoginSerializer, cls).get_token(user)
        token['user_id'] = user.id
        token['name'] = user.username
        token['email'] = user.email
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['is_active'] = user.is_active
        token['is_owner'] = user.is_owner
        if user:
            token.payload['exp'] = datetime_to_epoch(token.current_time + SUPERUSER_LIFETIME)
            return token
