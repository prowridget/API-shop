const seedData = {
    total_size: 5,
    type_id: 1, // Loại sản phẩm, ví dụ: 1 là cà phê
    offset: 0,
    products: [
        {
            id: 1,
            name: 'Cà phê sữa đá',
            description: 'Một ly cà phê đậm đà pha cùng sữa đặc, mang lại hương vị ngọt ngào đặc trưng.',
            price: 25000, // Giá: 25,000 VNĐ
            stars: 4.5,
            img: 'coffee1.png', // Đường dẫn ảnh
            location: 'Vietnam', // Nguồn gốc
            created_at: '2024-11-30T10:00:00',
            updated_at: '2024-12-01T15:00:00',
            type_id: 1,
        },
        {
            id: 2,
            name: 'Espresso',
            description: 'Cà phê nguyên chất, đậm vị, dành cho người yêu thích hương vị mạnh mẽ.',
            price: 30000,
            stars: 4.8,
            img: 'coffee2.png',
            location: 'Italy',
            created_at: '2024-11-30T11:00:00',
            updated_at: '2024-12-01T15:00:00',
            type_id: 1,
        },
        {
            id: 3,
            name: 'Cappuccino',
            description: 'Sự kết hợp hoàn hảo giữa espresso, sữa nóng và lớp bọt sữa mềm mịn.',
            price: 40000,
            stars: 5.0,
            img: 'coffee3.png',
            location: 'Italy',
            created_at: '2024-11-30T12:00:00',
            updated_at: '2024-12-01T15:00:00',
            type_id: 1,
        },
        {
            id: 4,
            name: 'Latte',
            description: 'Ly cà phê sữa nóng nhẹ nhàng, dễ uống, dành cho mọi độ tuổi.',
            price: 45000,
            stars: 4.7,
            img: 'coffee4.png',
            location: 'France',
            created_at: '2024-11-30T13:00:00',
            updated_at: '2024-12-01T15:00:00',
            type_id: 1,
        },
        {
            id: 5,
            name: 'Trà đào',
            description: 'Thức uống mát lạnh với hương vị trà hòa quyện cùng đào tươi mọng nước.',
            price: 35000,
            stars: 4.6,
            img: 'pop4.png',
            location: 'Vietnam',
            created_at: '2024-11-30T14:00:00',
            updated_at: '2024-12-01T15:00:00',
            type_id: 2, // Loại sản phẩm: 2 là trà
        },
    ],
};

module.exports = seedData;
