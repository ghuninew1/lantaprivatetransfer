# Reference website: Krabi Best Transfer

สำรวจข้อความจากหน้าเว็บเมื่อ 6 พฤศจิกายน 2026 เพื่อเป็น reference เท่านั้น ไม่ใช่ข้อมูลธุรกิจหรือราคาของ Lanta Private Transfer การแสดงผลจริง, responsive และ interaction ทั้งหมด **Not Verified**; ยังไม่ได้ส่งฟอร์มหรือทำธุรกรรม

## ส่วนร่วม

[Home](https://krabibesttransfer.com/) มี header พร้อมข้อมูลติดต่อและ Bookings; navigation มี Home, Check Price, How to pay, Package Tour, Gallery, FAQ, Contact และ Bookings; footer มีลิงก์หลักซ้ำ

## Home

มีตัวเลือก From, To, Vehicle Type, ช่อง Price และปุ่ม Book Now; ข้อความบริการและส่วนลดเที่ยวกลับ; คำอธิบายบริการรับส่ง; จุดขาย Shuttle Service, Comprehensive, Variety; รายการรถสามประเภทพร้อมราคาเริ่มต้นและ Book Now; สถิติและตัวอย่าง Package Tour. การคำนวณและการส่งต่อค่าไป Booking: **Not Verified**.

## Check Price

[Check Price](https://krabibesttransfer.com/rate.php) แสดงตารางแยกตามต้นทาง แต่ละตารางมีปลายทางและราคา Standard Car (1–3), Luxury SUV (1–4), Family Van (1–10). มีข้อมูลจำนวนมากและบางช่องเป็น 0 THB; ความหมายของ 0 และความถูกต้องของราคา **Not Verified**. ไม่ควรนำราคาต้นแบบไปใช้เป็นราคาธุรกิจจริงโดยไม่ยืนยัน

## Booking

[Booking](https://krabibesttransfer.com/booking.php) มี prefix, ชื่อ, นามสกุล, โทรศัพท์, email, journey type, From/To, โรงแรมต้นทางและปลายทาง, vehicle type, จำนวนรถและผู้โดยสาร, วันที่และเวลารับ, price, total cost และ Book Your Trip. เงื่อนไข validation, การคำนวณ, การส่งและขั้นตอนหลังจอง **Not Verified**.

## How to pay

[How to pay](https://krabibesttransfer.com/pay.php) อธิบายการชำระด้วยบัญชี PayPal หรือบัตรผ่าน guest checkout พร้อมภาพประกอบ และระบุว่ากลับไปยังเว็บไซต์หลังชำระเงิน. ขั้นตอนและสถานะการชำระจริง **Not Verified**.

## Package Tour

[Package Tour](https://krabibesttransfer.com/blog.php) เป็นรายการบทความพร้อมวันที่ ภาพ ชื่อ คำโปรย ผู้เขียน และ Read More; มี Categories ตามเดือน, รายการยอดนิยม และ pagination. การค้นหา ตัวกรอง และหน้ารายละเอียด **Not Verified**.

## Gallery

[Gallery](https://krabibesttransfer.com/gallery.php) พบ grid ของ thumbnails 82 รายการและ markup สำหรับ lightbox ใน HTML การเปิดภาพขยายบนต้นแบบ **Not Verified**.

## FAQ

[FAQ](https://krabibesttransfer.com/faq.php) มี 5 หัวข้อเกี่ยวกับการพบคนขับ เที่ยวบินล่าช้า การยกเลิกและคืนเงิน การติดต่อ และความรับผิดชอบเมื่อคนขับทำให้ตกเครื่อง. เป็นนโยบายของเว็บต้นแบบ ไม่ใช่นโยบายที่ยืนยันแล้วของ Lanta Private Transfer. Interaction **Not Verified**.

## Contact

[Contact](https://krabibesttransfer.com/contact.php) มีข้อมูลติดต่อ แบบฟอร์มชื่อ email โทรศัพท์ subject ข้อความ verify code และปุ่มส่ง พร้อมแผนที่ฝัง การตรวจสอบรหัสและการส่งฟอร์ม **Not Verified**.

## งานที่ยังต้องสำรวจ

สำหรับเว็บอ้างอิง การตรวจ responsive การคำนวณแบบ dynamic และ validation ฝั่งระบบยัง **Not Verified**. การตรวจแอป Lanta Private Transfer แยกออกจากการตรวจเว็บอ้างอิง

## Page audit และการเชื่อม routes

ตรวจเมนูหลักและ footer จาก [Home](https://www.krabibesttransfer.com/index.php) เทียบกับ [sitemap](https://www.krabibesttransfer.com/sitemap.xml), robots.txt, HTML และ `src/data/referenceWebsite.js` เมื่อ 6 พฤศจิกายน 2026 จาก sitemap พบ 42 URL รวม URL หลักและ query variants

| หน้าอ้างอิง | สถานะก่อนทำ | Local route และสถานะหลังทำ |
| --- | --- | --- |
| Home | Existing | `/` คงเนื้อหาและการจัดวางเดิม เชื่อมเมนูร่วม |
| Check Price | Incomplete ตารางตัวอย่าง | `/transferprices` เลือกต้นทางได้ ครบ 71 ตารางและ 821 แถวจากข้อมูลอ้างอิง |
| Booking | Incomplete มีข้อมูลตัวอย่างและการส่งที่ไม่ได้รอผลตอบกลับ | `/booking` ฟอร์มพรีวิวพร้อม validation ในเบราว์เซอร์ โค้ดเดิมยังอยู่ใน `src/pages/Booking.jsx` |
| How to Pay | Missing | `/how-to-pay` แสดงขั้นตอนของเว็บอ้างอิงและสถานะ payment |
| Package Tour | Missing เมนูเดิมออกไปเว็บภายนอก | `/tour-packages` แบ่งหน้าและกรองบทความอ้างอิงตามเดือน |
| Article details | Missing | `/tour-packages/:articleId` รองรับ 81 รายการ แสดงหัวข้อที่เรียบเรียงใหม่และวันที่ พร้อมลิงก์ไปยังบทความต้นฉบับ |
| Gallery | Missing route มีคอมโพเนนต์เดิมที่ไม่ได้ใช้งาน | `/gallery` เปิดรูปขยายจากไฟล์ 15 รูปที่มีในโปรเจกต์ HTML อ้างอิงมี 82 thumbnails และ markup สำหรับ lightbox |
| FAQ | Missing | `/faq` เปิดอ่าน 5 หัวข้อได้ โดยระบุว่าเป็นนโยบายอ้างอิง |
| Contact | Incomplete ขาด Phone และ Verify Code | `/contact` มีช่องครบตาม HTML รวม Message, แผนที่เดิม และการตรวจฟอร์มในเบราว์เซอร์ |
| About Us / Vehicle Types | Existing เป็นส่วนของ Home | คง Introduction และ Vehicle collection ใน Home ตามโครงสร้างที่พบ |
| Not Found | Missing | หน้า fallback สำหรับ path ที่ไม่รู้จักและรหัสบทความที่ไม่พบ |

React Router รองรับ path `.php` ที่สอดคล้องกับหน้าหลัก และ `/blog_details.php?WP=...` รวมถึง `inputmonth` และ `module_pageshow` บนหน้ารายการ Local pagination แบ่งจาก 81 รายการในชุดข้อมูล ส่วน contact prefill รองรับรหัสบทความผ่าน `article` และ `subject` / `message` จาก URL ที่พบใน sitemap โดยสร้างข้อความใหม่จากหัวข้อที่อนุญาตผ่าน lookup และตัดราคาเก่าออก

บน static hosting ให้ตั้ง SPA fallback ไปยัง `index.html` สำหรับ route ของแอป รวมถึง alias `.php` เพื่อให้เปิด URL ตรงและรีเฟรชได้ การตั้งค่า hosting เป็นงานแยกจากการทดสอบ Vite preview

ฟอร์ม Booking และ Contact ตรวจเฉพาะข้อมูลในหน้า ยังต้องยืนยันข้อมูลธุรกิจ ราคาจริง รายละเอียดทัวร์ สิทธิ์สื่อ และการเชื่อมระบบส่งฟอร์มหรือชำระเงินก่อนเผยแพร่ ผลใน preview ไม่มีการยืนยันว่าจอง ส่งข้อความ หรือชำระเงินสำเร็จ
