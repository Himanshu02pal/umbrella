from django.views.generic import TemplateView


class AboutView(TemplateView):
    template_name = "index.html"


class GalleryView(TemplateView):
    template_name = "gallery.html"

class NewsView(TemplateView):
    template_name = "news.html"

class NewspageView(TemplateView):
    template_name = "newsPage.html"

class MemberloginView(TemplateView):
    template_name = "member_login.html"

class VideoView(TemplateView):
    template_name = "video.html"
