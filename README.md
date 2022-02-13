
# Stack ที่ใช้

### Fontend 

* [Angular](https://angular.io/)
* [Tailwindcss](https://tailwindcss.com/)
* [Prime](https://www.primefaces.org/)
* [Augular Material](https://material.angular.io/)

##### Backend

* [Nestjs](https://nestjs.com/)
* [Prisma](https://www.prisma.io/)
* [MongoDB]()

# วิธีการติดตั้ง

โคลนโปรเจ็กลงมาใว้ที่เครื่องก่อน ด้วยการใช้เครื่องมือ Git
*ถ้ายังไม่มีให้ติดตั้งก่อน [Link](https://git-scm.com/)

เปิด Terminal ขึ้นมาแล้วพิมพ์คำสั่ง พร้อมเข้าไปในโฟลเดอร์

```bash
git clone https://github.com/Sh0ckWaveZero/medcury-quiz.git && cd medcury-quiz


```

![1644751068296.png](image/README/1644751068296.png)

###### โครงสร้างจะประกอบไปด้วย Fontend และ Backend

* Fontend คือ โฟลเดอร์ web
* Backend คือ โฟลเดอร์ api

```bash
ls



```

![1644751175440.png](image/README/1644751175440.png)

### วิธีการรัน Fontend

ติดตั้ง libraby ก่อน

```bash
cd web && yarn install
```

![1644751607292.png](image/README/1644751607292.png)

สั่งให้ fontend ทำงาน

```bash
yarn start
```

![1644752465472.png](image/README/1644752465472.png)

เมื่อรันเสร็จสามารถเข้าใช้งานผ่านเว็บรานเซอร์ได้ที่ลิงก์

```
http://localhost:4200/
```

![1644752626914.png](image/README/1644752626914.png)

### วิธีการรัน Backend

ใหม่เปิด Terminal Tab ใหม่หรือหน้าต่างใหม่

จากนั้นเข้ามาใน path ของโปรเจ็ก

```bash
cd api
```

![1644752978960.png](image/README/1644752978960.png)

จากนั้นให้เปิดตัว Text Editor *แนะนำให้ใช้  [Vs Code](https://code.visualstudio.com/) และทำการตั้งค่าตาม[ ลิงก์](https://code.visualstudio.com/docs/setup/mac)นี้ได้

จากนั้นก็เปิดโค้ดของตัว Backend ด้วย VS Code

```bash
code .
```

![1644753310013.png](image/README/1644753310013.png)

เปลี่ยนไฟล์ที่ชื่อว่า sample.env เป็น .env

![1644753410097.png](image/README/1644753410097.png)

ภายในไฟล์จะประกอบไปด้วยสิ่งที่จะใช้เพื่อรัน Backend

ซึ่งรายละของของ DATABASE_URL จะส่งอีเมล์ เนื่องจากได้ทำการต่อ MongoDB ใว้

```
PORT=3000
DATABASE_URL="mongodb://USERNAME:PASSWORD@HOST/DATABASE"
```

เมื่อทำการแก้ไขไฟล์เสร็จแล้วให้ทำการติดตั้ง Library สำหรับรัน ไปที่ตัวโปรแกรม vs code ไปที่เมนูบาร์ด้านบน คลิก > Teminal > New Terminal

![1644753746664.png](image/README/1644753746664.png)

จากนั้นให้พิมพ์คำสั่งติดตั้ง Library

```bash
yarn install
```

![1644753834475.png](image/README/1644753834475.png)

ทำการรัน

```bash
yarn run start:dev
```

![1644753925932.png](image/README/1644753925932.png)

ผลลัพธ์ Backend จะรันที่ http://localhost:3000

![1644753913742.png](image/README/1644753913742.png)
