use eazy

-- tabel users
CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY, -- ID unik pengguna
    name NVARCHAR(100) NOT NULL, -- Nama pengguna
    email NVARCHAR(255) NOT NULL UNIQUE, -- Email pengguna (unik)
    password NVARCHAR(255) NOT NULL, -- Password pengguna (terenkripsi)
	updated_at DATETIME DEFAULT GETDATE(), -- Tanggal terakhir diperbarui
    created_at DATETIME DEFAULT GETDATE() -- Tanggal registrasi
);

-- tabel UserProfiles
CREATE TABLE UserProfiles (
    ProfileID INT IDENTITY(1,1) PRIMARY KEY, -- ID unik untuk tabel UserProfiles
    UserID BIGINT NOT NULL, -- Foreign key mengacu ke kolom id di tabel users
    Bio NVARCHAR(255) NULL, -- Deskripsi singkat pengguna
    Gender NVARCHAR(10) NULL, -- Jenis kelamin pengguna
    ProfilePicture NVARCHAR(255) NULL, -- URL foto profil pengguna
    InterestedTopics NVARCHAR(255) NULL, -- Topik yang diminati pengguna
    RegisteredSince DATETIME NULL, -- Kolom untuk menyimpan waktu registrasi pengguna
    FOREIGN KEY (UserID) REFERENCES users(id) -- Relasi ke tabel users
);

GO

-- Trigger untuk mengisi RegisteredSince dengan created_at dari tabel users
CREATE TRIGGER trg_SetRegisteredSince
ON UserProfiles
AFTER INSERT
AS
BEGIN
    UPDATE UserProfiles
    SET RegisteredSince = (SELECT created_at FROM users WHERE users.id = inserted.UserID)
    FROM inserted
    WHERE UserProfiles.ProfileID = inserted.ProfileID;
END;

CREATE TABLE Articles (
    ArticleID INT IDENTITY(1,1) PRIMARY KEY,
    AuthorID BIGINT NOT NULL,
    Title NVARCHAR(255) NOT NULL,
    Description NVARCHAR(500) NULL,
    Content TEXT NOT NULL,
    ImageURL NVARCHAR(255) NULL,
    CategoryID INT NOT NULL,
    PublishedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (AuthorID) REFERENCES Users(id),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);

CREATE TABLE Categories (
    CategoryID INT IDENTITY(1,1) PRIMARY KEY,
    CategoryName NVARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Likes (
    LikeID INT IDENTITY(1,1) PRIMARY KEY,
    UserID BIGINT NOT NULL,
    ArticleID INT NOT NULL,
    LikedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserID) REFERENCES Users(id),
    FOREIGN KEY (ArticleID) REFERENCES Articles(ArticleID)
);

CREATE TABLE Comments (
    CommentID INT IDENTITY(1,1) PRIMARY KEY,
    UserID INT NOT NULL,
    ArticleID INT NOT NULL,
    Content NVARCHAR(1000) NOT NULL,
    CommentedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserID) REFERENCES Users(id),
    FOREIGN KEY (ArticleID) REFERENCES Articles(ArticleID)
);