from django.shortcuts import render
from django.db import IntegrityError
from django.contrib import messages
from django.contrib.auth import login, authenticate, logout
from users.models import User
from django.http.response import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken

# Create your views here.
@api_view(['POST'])
def sign_up(request):
    if request.method == "POST":
        username = request.data["username"]
        email = request.data["email"]

        # Ensure password matches confirmation
        password = request.data["password"]
        confirmation = request.data["confirmation"]
        if password != confirmation:
            return Response({"message" : "Passwords must match."},
                status=status.HTTP_406_NOT_ACCEPTABLE)

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return Response({"message" : "Username already exist"},
                status=status.HTTP_406_NOT_ACCEPTABLE)
        login(request, user)
        return Response({"message" : "User created"},
                status=status.HTTP_201_CREATED)
    else:
        return Response({"message" : "What?"},
                status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def sign_in(request):
    # Attempt to sign user in
    username = request.data["username"]
    password = request.data["password"]
    user = authenticate(request, username=username, password=password)

    # Check if authentication successful
    if user is not None:
        login(request, user)
        return Response({'message': 'Login successful'}, status=status.HTTP_202_ACCEPTED)
    else:
        messages.error(request, )
        return Response({'message': "Invalid username and/or password."},status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
def sign_out(request):
    logout(request)
    return Response({'message': 'Logout successful'}, status=status.HTTP_202_ACCEPTED)

@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def logout(request):
    print(request.data["refresh_token"])
    try:
        refresh_token = request.data["refresh_token"]
        token = RefreshToken(refresh_token)
        token.blacklist()

        return Response(status=status.HTTP_205_RESET_CONTENT)
    except Exception as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)