insert into public.classes (name, teacher) values
('Lớp 1A', 'Cô Lan'),
('Lớp 2B', 'Thầy Hùng'),
('Lớp 3C', 'Cô Mai');

insert into public.students (class_id, full_name, gender, birth_date, hometown) values
((select id from classes where name='Lớp 1A'), 'Nguyễn Văn An', 'Nam', '2015-01-12', 'Hà Nội'),
((select id from classes where name='Lớp 1A'), 'Trần Thị Hoa', 'Nữ', '2015-05-10', 'Bắc Giang'),
((select id from classes where name='Lớp 1A'), 'Phạm Minh Khang', 'Nam', '2015-07-09', 'Hải Dương'),
((select id from classes where name='Lớp 1A'), 'Lê Hoàng Bảo', 'Nam', '2015-09-22', 'Nam Định'),
((select id from classes where name='Lớp 1A'), 'Đỗ Thị Linh', 'Nữ', '2015-02-14', 'Thái Bình'),

((select id from classes where name='Lớp 2B'), 'Nguyễn Quỳnh Trang', 'Nữ', '2014-03-08', 'Hà Nam'),
((select id from classes where name='Lớp 2B'), 'Bùi Văn Nam', 'Nam', '2014-08-16', 'Thanh Hóa'),
((select id from classes where name='Lớp 2B'), 'Phạm Hoàng Anh', 'Nam', '2014-12-03', 'Ninh Bình'),
((select id from classes where name='Lớp 2B'), 'Trần Hải Yến', 'Nữ', '2014-07-24', 'Vĩnh Phúc'),
((select id from classes where name='Lớp 2B'), 'Đào Đức Long', 'Nam', '2014-11-18', 'Bắc Ninh'),

((select id from classes where name='Lớp 3C'), 'Ngô Mai Hương', 'Nữ', '2013-02-22', 'Hà Nội'),
((select id from classes where name='Lớp 3C'), 'Vũ Đức Anh', 'Nam', '2013-09-15', 'Hà Tĩnh'),
((select id from classes where name='Lớp 3C'), 'Nguyễn Khánh Linh', 'Nữ', '2013-05-30', 'Bắc Giang'),
((select id from classes where name='Lớp 3C'), 'Đặng Minh Hiếu', 'Nam', '2013-10-12', 'Hưng Yên'),
((select id from classes where name='Lớp 3C'), 'Trần Thị Thanh', 'Nữ', '2013-04-25', 'Hà Nam');
-- ... thêm tổng 30 học sinh
