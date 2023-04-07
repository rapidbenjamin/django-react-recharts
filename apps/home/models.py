from django.db import models

class Sales(models.Model):
    id = models.AutoField(primary_key=True)
    product = models.CharField(max_length=100)  # name: Nike AIR, PUMA
    price = models.IntegerField()  # 99
    fee = models.IntegerField()  # 5
    currency = models.CharField(max_length=3)  # usd, eur, chn
    country = models.CharField(max_length=100)  # usa, ch, ro
    purchase_date = models.IntegerField()

    def __str__(self):
        return self.product
