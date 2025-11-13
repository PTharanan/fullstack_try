from django.core.serializers import serialize
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import User_Serializer
from .models import User

class User_API(APIView):

    def get(self, request):

        data = User.objects.all()
        serialize_data = User_Serializer(data, many=True).data
        return Response(serialize_data)

    def post(self, request):

        data = User(Name = request.data['Name'], Age = request.data['Age'])
        data.save()
        return Response("Sucessfully POSTED!!!")

    def put(self, request, user_id):

        data = get_object_or_404(User, id = user_id)
        serialize_data = User_Serializer(data, data = request.data)

        if serialize_data.is_valid():

            serialize_data.save()
            return Response({"message": "User successfully updated", "data": serialize_data.data}, status=status.HTTP_200_OK )
        return Response(serialize_data.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, user_id):

        data = get_object_or_404(User, id = user_id)
        data.delete()
        return Response({"message": "User successfully deleted"},   status=status.HTTP_204_NO_CONTENT )