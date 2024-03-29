# Generated by Django 2.1.5 on 2019-01-30 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('calories', models.IntegerField()),
                ('protein', models.DecimalField(decimal_places=2, max_digits=6)),
                ('carbs', models.DecimalField(decimal_places=2, max_digits=6)),
                ('fat', models.DecimalField(decimal_places=2, max_digits=6)),
            ],
        ),
    ]
