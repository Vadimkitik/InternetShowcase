﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TestWebAPI.Data;

namespace TestWebAPI.Migrations
{
    [DbContext(typeof(TestDbContext))]
    partial class TestDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("TestWebAPI.Data.Models.Category", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("categoryLine")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("categoryName")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("TestWebAPI.Data.Models.Product", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<bool>("available")
                        .HasColumnType("tinyint(1)");

                    b.Property<int>("categoryID")
                        .HasColumnType("int");

                    b.Property<string>("description")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("imageUrl")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<bool>("isFavourite")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<double?>("oldPrice")
                        .HasColumnType("double");

                    b.Property<double>("price")
                        .HasColumnType("double");

                    b.Property<string>("productLine")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int?>("subcategoryID")
                        .HasColumnType("int");

                    b.Property<int?>("underSubcategoryID")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("categoryID");

                    b.HasIndex("subcategoryID");

                    b.HasIndex("underSubcategoryID");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("TestWebAPI.Data.Models.SubCategory", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("categoryID")
                        .HasColumnType("int");

                    b.Property<string>("subCategoryLine")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("subCategoryName")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("id");

                    b.HasIndex("categoryID");

                    b.ToTable("SubCategories");
                });

            modelBuilder.Entity("TestWebAPI.Data.Models.UnderSubCategory", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("subCategoryID")
                        .HasColumnType("int");

                    b.Property<string>("underSubCategoryLine")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("underSubCategoryName")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("id");

                    b.HasIndex("subCategoryID");

                    b.ToTable("UnderSubCategories");
                });

            modelBuilder.Entity("TestWebAPI.Data.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TestWebAPI.Data.Models.Product", b =>
                {
                    b.HasOne("TestWebAPI.Data.Models.Category", "Category")
                        .WithMany("Products")
                        .HasForeignKey("categoryID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TestWebAPI.Data.Models.SubCategory", "SubCategory")
                        .WithMany("Products")
                        .HasForeignKey("subcategoryID");

                    b.HasOne("TestWebAPI.Data.Models.UnderSubCategory", "UnderSubCategory")
                        .WithMany("Products")
                        .HasForeignKey("underSubcategoryID");
                });

            modelBuilder.Entity("TestWebAPI.Data.Models.SubCategory", b =>
                {
                    b.HasOne("TestWebAPI.Data.Models.Category", "Category")
                        .WithMany("SubCategories")
                        .HasForeignKey("categoryID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("TestWebAPI.Data.Models.UnderSubCategory", b =>
                {
                    b.HasOne("TestWebAPI.Data.Models.SubCategory", "SubCategory")
                        .WithMany("UnderSubCategories")
                        .HasForeignKey("subCategoryID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
