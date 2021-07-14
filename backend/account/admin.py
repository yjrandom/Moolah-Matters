from django.contrib import admin
from account.models import *

# Register your models here.
admin.site.register(Account)
admin.site.register(Account_type)
admin.site.register(Icon)
admin.site.register(Transaction)
admin.site.register(Transaction_type)