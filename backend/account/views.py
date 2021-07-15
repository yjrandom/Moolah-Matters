from os import stat
from django.core.checks import messages
from account.models import Account, Transaction
from account.serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['GET', 'POST'])
def accounts_index(request):

    accounts = Account.objects.filter(user=request.user.id)
    accounts_all = [a.serialize() for a in accounts]
    if request.user.id:
        return Response(accounts_all, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def get_user(request):
    
    user = request.user
    return Response({
        'username' : user.id
    })

@api_view(['POST'])
def get_transactions(request):
    transactions = Transaction.objects.filter(account=request.data['id'])
    transactions_all = [t.serialize() for t in transactions]
    return Response(transactions_all)

@api_view(['GET'])
def get_transaction_types(request):
    transaction_types = Transaction_type.objects.all()
    serializer = TransactionTypeSerializer(transaction_types, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_transactions(request):
    name = request.data['name']
    amount = request.data['amount']
    account_id = request.data['account_id']
    transaction_type_id = request.data['transaction_type_id']
    date_time = request.data['date_time']
    try:
        transaction = Transaction(
            name=name,
            amount=amount,
            account_id=account_id,
            transaction_type_id=transaction_type_id,
            date_time=date_time
            )
        transaction.save()
        
    except:
        return Response({"message" : "Wrong"},
            status=status.HTTP_406_NOT_ACCEPTABLE)
    new_transaction = Transaction.objects.latest('id')
    return Response({'message': 'Transaction created.', 'new_transaction': new_transaction.serialize()}, 
    status=status.HTTP_201_CREATED)