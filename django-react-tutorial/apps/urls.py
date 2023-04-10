from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name='index'),
    path("charts", views.chart, name='charts'),
]
