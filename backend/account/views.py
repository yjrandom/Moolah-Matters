from account.models import Account, Transaction
from django.shortcuts import render
from account.serializers import AccountSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET', 'POST'])
def accounts_index(request):

    accounts = Account.objects.filter(user=request.user.id)
    accounts_all = [a.serialize() for a in accounts]
    print(accounts_all)
    # serializer = AccountSerializer(accounts_all, many=True)
    # print(serializer.data)
    return Response(accounts_all)

@api_view(['GET', 'POST'])
def get_user(request):
    
    user = request.user
    return Response({
        'username' : user.id
    })

@api_view(['GET', 'POST'])
def get_transactions(request):
    
    transactions = Transaction.objects.filter(account=request.data['id'])
    transactions_all = [t.serialize() for t in transactions]
    print(transactions_all)
    return Response(transactions_all)