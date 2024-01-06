# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

# @api_view(['GET'])
# @renderer_classes([JSONRenderer])
class Backend(APIView):
    def get(self, request, format=None):
        return Response({"message": "backend"})
    