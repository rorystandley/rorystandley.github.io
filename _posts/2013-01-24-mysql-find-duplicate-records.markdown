---
layout: post
title:  "MySQL - Find Duplicate Records"
date:   2013-01-24 20:00:00 +0100
featured_image: 'mysql.jpg'
---
Recently I was working with the <a href="http://devdocs.magento.com/guides/m1x/api/soap/introduction.html" target="_blank" rel="nofollow">Magento API</a> uploading products for a test project. The type of products that I was uploading where just simple types. Each product however required that it have a unique “SKU” code to represent it, and no duplicate records.

The data that I was given, some 19k products. All had “SKU” codes with them. So I went about uploading these via the API. Some time into the process I started to receive an error message back saying “SKU must be unique”

Now with 19k products and the possibility of there just being even one product with a duplicate SKU, there is only one action to take. Get stuck into the database with raw MySQL commands!

Here is the MySQL command to find duplicate records from a MySQL database.

```sql
SELECT sku
FROM product
GROUP BY sku
HAVING count(sku) > 1
```

This command will find all the SKU that are used more than once. You only get a single record for each SKU. The example output of which could be:

```sql
0001     Product 1
0002     Product 2
0003     Product 3
```

You could use this command in a where clause to get all rows based on the duplicated SKU:

```sql
SELECT *
FROM product
WHERE sku IN (
     SELECT sku
     FROM product
     GROUP BY sku
     HAVING count(sku) > 1
     )
ORDER BY sku
```

This command would then give you the following example output:

```sql
0001     Product 1
0001     Product 1
0002     Product 2
0002     Product 2
0003     Product 3
0003     Product 3
```

This MySQL command can be used for any single table. simply change the column & table name for that of your own and away you go!