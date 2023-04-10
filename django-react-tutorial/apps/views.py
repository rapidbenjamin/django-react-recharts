from django.shortcuts import render
from collections import Counter

from .models import Sales

# Create your views here.
def index(request):
    return render(request, "index.html")


def chart(request):
    countries = list(Sales.objects.values_list('country', flat=True))
    country_counts = Counter(countries)
    country_count = [
        {'name': country, 'count': country_counts[country]}
        for country in country_counts]
    return render(request, "charts.html", {"country_count": country_count})
