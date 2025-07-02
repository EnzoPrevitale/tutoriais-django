from django.shortcuts import render
from .models import Table

# Create your views here.
def index(request):
    table = Table.objects.all()
    context = {'users': table}
    return render(request, "myapp/index.html", context)