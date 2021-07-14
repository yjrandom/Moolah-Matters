from django.shortcuts import render
from django.db import IntegrityError
from django.contrib import messages
from django.contrib.auth import login
from users.models import User
from django.http.response import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

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