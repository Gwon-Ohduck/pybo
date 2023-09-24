from django.shortcuts import render, redirect
from .dataFarthing import *


def index(request):
    chat_history = request.session.get('chat_history', [])

    if request.method == 'POST':
        mes = request.POST['floatingInput']

        rep = guSearch(mes)
        chat_history.append([mes, rep])

        request.session['chat_history'] = chat_history
        return redirect('chatbot:index')
    else:
        context = {'chat_history': chat_history}
        return render(request, 'chatbot/index.html', context)
