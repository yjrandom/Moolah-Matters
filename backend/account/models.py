from django.db import models
import uuid

from django.db.models.deletion import DO_NOTHING
from django.db.models.fields import DateTimeField, DecimalField
from users.models import User

# Create your models here.
class Account_type(models.Model):
    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4
    )
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Icon(models.Model):
    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4
    )
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='uploads/%Y/%m/%d')

    def __str__(self):
        return self.name

class Account(models.Model):
    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4
    )
    name = models.CharField(max_length=200)
    amount = models.DecimalField(default=0.00, decimal_places=2, max_digits=10)
    account_type = models.ForeignKey(
        Account_type,
        on_delete=DO_NOTHING,
        related_name="accounts"
    )
    user = models.ForeignKey(
        User,
        on_delete=DO_NOTHING,
        related_name="accounts"
    )
    color = models.CharField(max_length=200)
    icon = models.ForeignKey(
        Icon,
        on_delete=DO_NOTHING,
        related_name='accounts'
    )

    def serialize(self):
        return {
            "id" : self.id,
            "name": self.name,
            "amount" : self.amount,
            "account_type" : {
                "name" : self.account_type.name
            },
            "color": self.color,
            "icon": self.icon.name
        }

    def __str__(self):
        return self.name

class Transaction_type(models.Model):
    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4
    )
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    

class Transaction(models.Model):
    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4
    )
    account = models.ForeignKey(
        Account,
        on_delete=DO_NOTHING,
        related_name="transactions"
    )
    transaction_type = models.ForeignKey(
        Transaction_type,
        on_delete=DO_NOTHING,
        related_name="transactions"
    )
    amount = models.DecimalField(default=0.00, decimal_places=2, max_digits=10)
    date_time = models.DateTimeField(auto_now=False, auto_now_add=False)

    def serialize(self):
        return {
            "id" : self.id,
            "amount" : self.amount,
            "transaction_type" : {
                "name" : self.transaction_type.name
            },
            "account" : {
                "name" : self.account.name
            },
            'date_time' : self.date_time
        }
