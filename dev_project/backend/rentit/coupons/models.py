from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()

# Create your models here.


from products.models import rooms,shops,apartments

class coupons(models.Model):
    coupon_type_choices=[
          ('discount','discount'),
          ('off_price','off_price')
     ]
    coupoun_code=models.CharField(max_length=255,primary_key=True)
    seller_id=models.ForeignKey(User,on_delete=models.CASCADE,related_name='created_by')
    coupoun_rooms=models.ManyToManyField(rooms,blank=True)
    coupoun_shops=models.ManyToManyField(shops,blank=True)
    coupoun_apartments=models.ManyToManyField(apartments,blank=True)

    date_created=models.DateTimeField(auto_now_add=True)
    valid_from = models.DateField()
    expiry_date=models.DateField()

    life = models.IntegerField()

    expired=models.BooleanField(default=False)

    used_by=models.ManyToManyField(User,related_name='used_by',blank=True)

    admin_coupon=models.BooleanField(default=False)

    coupon_type=models.CharField( max_length=255,choices=coupon_type_choices)
    off=models.IntegerField(default=0)
    currency = models.CharField(max_length=255)

    min_price=models.IntegerField(default=0)
    max_off_price=models.IntegerField(null=True,blank=True)


