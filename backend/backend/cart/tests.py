import uuid
from django.test import TestCase
from rest_framework import status
from django.urls import include, path, reverse
from rest_framework.test import APITestCase
from .models import Item

class ItemTests(APITestCase):
    def test_create_item(self):
        itemDetails = {
            "item_name": "item_name",
            "price": 100,
            "image":"image",
        }
        response = self.client.post('/item/',itemDetails, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data.get('item_name'),itemDetails.get('item_name'))
        self.assertEqual(response.data.get('price'),itemDetails.get('price'))
        self.assertEqual(response.data.get('image'),itemDetails.get('image'))
        
    def test_get_empty_item_list(self):
        response = self.client.get('/item/', format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data),0)
    
    def test_delete_wrong_item(self):
        newId = uuid.uuid4()
        response = self.client.delete('/item/{}/'.format(newId), format='json')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        
    def test_get_wrong_item_details(self):
        newId = uuid.uuid4()
        response = self.client.get('/item/{}/'.format(newId), format='json')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        
    def test_add_and_get_item(self):
        itemDetails = {
            "item_name": "item_name",
            "price": 100,
            "image":"image",
        }
        response = self.client.post('/item/',itemDetails, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data.get('item_name'),itemDetails.get('item_name'))
        self.assertEqual(response.data.get('price'),itemDetails.get('price'))
        self.assertEqual(response.data.get('image'),itemDetails.get('image'))
        response = self.client.get('/item/', format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data),1)
        
    def test_add_and_delete_item(self):
        itemDetails = {
            "item_name": "item_name",
            "price": 100,
            "image":"image",
        }
        response = self.client.post('/item/',itemDetails, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data.get('item_name'),itemDetails.get('item_name'))
        self.assertEqual(response.data.get('price'),itemDetails.get('price'))
        self.assertEqual(response.data.get('image'),itemDetails.get('image'))
        newId = response.data.get('id')
        response = self.client.delete('/item/{}/'.format(newId), format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        
    def test_add_and_get_item_details(self):
        itemDetails = {
            "item_name": "item_name",
            "price": 100,
            "image":"image",
        }
        response = self.client.post('/item/',itemDetails, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data.get('item_name'),itemDetails.get('item_name'))
        self.assertEqual(response.data.get('price'),itemDetails.get('price'))
        self.assertEqual(response.data.get('image'),itemDetails.get('image'))
        newId = response.data.get('id')
        response = self.client.get('/item/{}/'.format(newId), format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('item_name'),itemDetails.get('item_name'))
        self.assertEqual(response.data.get('price'),itemDetails.get('price'))
        self.assertEqual(response.data.get('image'),itemDetails.get('image'))