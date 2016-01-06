# coding: utf-8

from django.shortcuts import render, get_object_or_404
from .models import Store # Import store model

def stores(request, store_id):
	store = get_object_or_404(Store, pk=store_id)

	return render(
		request,
		'show_store.html',
		{
			'store': store
		}
	)