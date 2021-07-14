from django.urls import path

from . import views

urlpatterns = [
    path('register/', views.sign_up, name="register"),
    # path('signin/', views.sign_in, name="login"),
    # path('logout/', views.sign_out, name="logout")
]