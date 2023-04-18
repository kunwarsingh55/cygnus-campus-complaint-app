from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponse
from .forms import ComplaintForm
from django.http import HttpResponseRedirect
from .models import Complaint
from django.views import View
from django.http import JsonResponse

def faq(request):
    return render(request,'polls/FAQ.html')

def all_complaints(request):
    complaint_lists= Complaint.objects.all()
    return render(request,'polls/index.html',{'complaint_lists':complaint_lists})

def index1(request):
    pass

def signup(request):
    return render(request, 'polls/signin.html', {})


def post_form(request, blog_id):
   if request.method == 'POST':
       form = ComplaintForm(request.POST)
       if form.is_valid():
           form.save()

def comp(request):
    submitted= False
    if request.method =="POST":
        form=ComplaintForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/Cygnus/')
    else:
        form = ComplaintForm
        if 'submitted' in request.GET:
            submitted=True

    return render(request, "polls/complaint.html", {'form':form,'submitted':submitted} )
  
def view_complaint(request):
    print("-----------")
    target = request.GET.get('Cid', '')
    complaint_lists= Complaint.objects.filter(id=target)
    return render(request,'polls/Hackathon/index3.html',{'complaint_lists':complaint_lists})

def home(request):
    complaint_lists= Complaint.objects.all()
    return render(request, "polls/Hackathon/index.html", {'complaint_lists':complaint_lists})

def adminControl(request):
    complaint_lists= Complaint.objects.all()
    return render(request, "polls/Hackathon/index2.html", {'complaint_lists':complaint_lists})

class updateStatus(View):
    def get(self, request):
        get_token(request)
        
        data = [{
                
                'Get Request': 'OK'
                }]

        return JsonResponse(data, safe=False)  
    def post(self, request):
        print("YOO =----")
        if request.POST.get('check'):
            
            print(request.POST.get('check'))
            
            t = Complaint.objects.get(id=request.POST.get('id'))
            t.status =  request.POST.get('check')
            t.save()
            


        respp = [{
                
                'Posted Data': 'Received'
                }]


        return adminControl(request)
