from django.urls import path
from account.views import *

app_name = "accounts"

urlpatterns = [
    path("", get_user, name="get_user_page"),
    path("accounts/", accounts_index, name="accounts_index_page"),
    path("transactions/", get_transactions, name="get_transactions_page"),
    path("transactiontypes/", get_transaction_types, name="get_transactions_types_page"),
    path("transaction/create", create_transactions, name="create_transaction_page")
]