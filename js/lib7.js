const productList = [
    {id: "01", name: "Son MAC", price: "650.000", image: "../assets/images/mac.jpg", desc: "Son MAC đỏ kinh điển - lâu trôi, màu sắc nổi bật, phù hợp với mọi tông da.", productLink: "product-detail.html" },

    {id: "02", name: "Son Dior", price: "950.000", image: "../assets/images/dior.jpg", desc: "Son Dior cao cấp - độ bóng hoàn hảo, màu đỏ sang trọng, giữ lâu suốt cả ngày.", productLink: "product-detail.html" },

    { id: "03", name: "Son 3CE", price: "350.000", image: "../assets/images/3ce.jpg", desc: "Son 3CE màu cam đất - tự nhiên, không gây kích ứng, dễ sử dụng hàng ngày.", productLink: "product-detail.html" },

    {id: "04", name: "Son Black Rouge", price: "220.000", image: "../assets/images/blackrouge.jpg", desc: "Son Black Rouge - màu đỏ đất sang trọng, lâu trôi, phù hợp dạo phố.", productLink: "product-detail.html" },

    {id: "05", name: "Son Romand", price: "250.000", image: "../assets/images/romand.jpg", desc: "Son Romand Juicy - mềm mại, bóng màu cam, không làm khô môi, dễ thương.", productLink: "product-detail.html" },

    { id: "06", name: "Son Chanel", price: "1.200.000", image: "../assets/images/chanel.jpg", desc: "Son Chanel Red - biểu tượng thời trang, màu đỏ tươi sáng, rất sang trọng.", productLink: "product-detail.html" },

    {id: "07", name: "Son YSL", price: "1.000.000", image: "../assets/images/ysl.jpg", desc: "Son YSL Rouge Volupté - bóng bẩy, màu đỏ quyến rũ, lâu trôi cả ngày.", productLink: "product-detail.html" },

    {id: "08",name: "Son Gucci", price: "980.000", image: "../assets/images/gucci.jpg", desc: "Son Gucci Beauty - nước hoa nồng, màu sắc nho nhỏ, sang trọng và quý phái.", productLink: "product-detail.html" },

    {id: "09", name: "Son Merzy", price: "180.000", image: "../assets/images/merzy.jpg", desc: "Son Merzy giá rẻ - chất lượng tốt, màu sắc đa dạng, phù hợp với sinh viên.", productLink: "product-detail.html" },

    {id: "10", name: "Son BBIA", price: "210.000", image: "../assets/images/bbia.jpg", desc: "Son BBIA Tint - bền màu, mềm mịn, không làm khô, phù hợp make-up hàng ngày.", productLink: "product-detail.html" },
];

function addProduct(id, name, price, image, link) {

    const productListDiv = document.getElementById("product-list");

    // Khung sản phẩm
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "col-md-3 mb-4 product-item text-center");

    // ===== IMAGE =====
    const productImage = document.createElement("div");

    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", name);
    img.setAttribute("class", "img-fluid rounded shadow-sm");

    productImage.appendChild(img);

    // ===== INFO =====
    const productInfo = document.createElement("div");

    // Tên sản phẩm
    const productName = document.createElement("h5");
    productName.textContent = name;

    // Giá sản phẩm
    const productPrice = document.createElement("p");
    productPrice.textContent = price + " VND";

    // Nút xem chi tiết
    const productLink = document.createElement("a");
    productLink.setAttribute("href", link + "?id=" + id);
    productLink.setAttribute("class", "btn btn-danger btn-sm");
    productLink.textContent = "Xem chi tiết";

    // Ghép dữ liệu
    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);

    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    productListDiv.appendChild(productItem);
}

// Hiển thị danh sách son
productList.forEach(product => {
    addProduct(
        product.id,
        product.name,
        product.price,
        product.image,
        product.productLink
    );
});