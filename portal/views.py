from django.shortcuts import render, HttpResponse, redirect, get_object_or_404
from django.contrib.sessions.models import Session
from . models import Complaint
from .models import CustomUser


# Home View - All Complaints Tab - Shows All the complaints in the DB
def home(request):
    # return render(request, 'portal/home.html')
    items = Complaint.objects.all()
    return render(request, 'home.html', {'complaints': items})


# End-point for saving new complaints 
def complaint(request):
    if request.method == 'POST':
        title = request.POST['title']
        discription = request.POST['discription']
        faculty = request.POST['faculty']
        date = request.POST['date']
        status = "Pending"

        NewComplaint = Complaint(
            title=title, discription=discription, status=status, faculty=faculty, pub_date=date)
        NewComplaint.save()

        #print(title, discription, faculty, date)
    return render(request, 'complaint.html')


# Protected View - For Staff to see the complains assigned to them
def staff(request):
    # Check for session
    user_id = request.session.get('user_id')
    if user_id:
        # User is authenticated;
        # user = CustomUser.objects.get(username=user_id)
        # print(user_id)

        # get all complains for current logged in member
        items = Complaint.objects.filter(faculty=user_id).values()
        return render(request, 'staff.html', {'complaints': items})

    else:
        # User is not authenticated; redirecting to the login page
        return redirect('login')


# End-point to change status of a complaint
def resolve_complaint(request, complaint_id):
    # Get the complaint object to delete or return a 404 error if not found
    complaint = get_object_or_404(Complaint, complaint_id=complaint_id)

    if request.method == 'POST':
        # Toggle the complaint staus
        if complaint.status == "Resolved":
            complaint.status = "Pending"
        else:
            complaint.status = "Resolved"
        complaint.save()

        # Redirect to a page after successful updation 
    return redirect('staff')


# Signup Page, Not routed from anywhere for now... 
def signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = CustomUser(username=username)
        user.set_password(password)
        user.save()
        return redirect('login')
    return render(request, 'signup.html')


# End=point for delete session and logout
def logout(request):
    if 'user_id' in request.session:
        del request.session['user_id']
    return redirect('login')  

# Login View - Auth End-point
def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        print(username, password)
        try:
            user = CustomUser.objects.get(username=username)
            print(user)
            if user.check_password(password):
                # Authentication successful
                # Set a session variable
                # create a session for the user
                request.session['user_id'] = user.username
                return redirect('staff')
            else:
                # Authentication failed
                return render(request, 'login.html')
        except CustomUser.DoesNotExist:
            # Username not found
            return render(request, 'login.html')
    return render(request, 'login.html')
