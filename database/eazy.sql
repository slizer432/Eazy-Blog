use eazy
CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY, -- ID unik pengguna
    name NVARCHAR(100) NOT NULL, -- Nama pengguna
    email NVARCHAR(255) NOT NULL UNIQUE, -- Email pengguna (unik)
    password NVARCHAR(255) NOT NULL, -- Password pengguna (terenkripsi)
	updated_at DATETIME DEFAULT GETDATE(), -- Tanggal terakhir diperbarui
    created_at DATETIME DEFAULT GETDATE() -- Tanggal registrasi
);