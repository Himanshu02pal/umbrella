from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^$', AboutView.as_view()),
    url(r'^gallery/',GalleryView.as_view() , name='gallery'),
    url(r'^news/', NewsView.as_view() , name='news'),
]