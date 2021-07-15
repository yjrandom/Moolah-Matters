from django.db.models import fields
from rest_framework import serializers
from account.models import *

class AccountTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account_type
        fields = '__all__'

class AccountSerializer(serializers.ModelSerializer):
    # name = AccountTypeSerializer(many=True, read_only=True)
    class Meta:
        model = Account
        fields = '__all__'

class TransactionTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction_type
        fields = '__all__'

    