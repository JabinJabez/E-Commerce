package com.webApp.ECommerce.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.math.RoundingMode;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_gen")
    @SequenceGenerator(name = "product", sequenceName = "product_sequence", allocationSize = 1)
    private Long prodId;

    private String prodName;
    private Double amount;
    private Double rating;
    private String category;
    private String imageUrl;
    private Integer stockAvailable;

    @Column(name = "names_description")  // Ensure correct mapping to DB column
    private String description;

    // Default Constructor
    public Product() {
    }

    // Parameterized Constructor
    public Product(String prodName, Double amount, Double rating, String category, String imageUrl, Integer stockAvailable, String description) {
        this.prodName = prodName;
        this.amount = amount;
        this.rating = roundToTwoDecimalPlaces(rating);  // Ensure rating is stored with 2 decimals
        this.category = category;
        this.imageUrl = imageUrl;
        this.stockAvailable = stockAvailable;
        this.description = description;
    }

    // Getters and Setters
    public Long getProdId() {
        return prodId;
    }

    public void setProdId(Long prodId) {
        this.prodId = prodId;
    }

    public String getProdName() {
        return prodName;
    }

    public void setProdName(String prodName) {
        this.prodName = prodName;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Double getRating() {
        return rating != null ? roundToTwoDecimalPlaces(rating) : null;
    }

    public void setRating(Double rating) {
        this.rating = roundToTwoDecimalPlaces(rating);
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Integer getStockAvailable() {
        return stockAvailable;
    }

    public void setStockAvailable(Integer stockAvailable) {
        this.stockAvailable = stockAvailable;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // Utility Method to Round to 2 Decimal Places
    private Double roundToTwoDecimalPlaces(Double value) {
        if (value == null) return null;
        return new BigDecimal(value).setScale(2, RoundingMode.HALF_UP).doubleValue();
    }

    // Get formatted rating for UI
    public String getFormattedRating() {
        return rating != null ? String.format("%.2f", rating) : "0.00";
    }

    // toString method
    @Override
    public String toString() {
        return "Product{" +
                "prodId=" + prodId +
                ", prodName='" + prodName + '\'' +
                ", amount=" + amount +
                ", rating=" + getRating() +   // Ensure rating prints with 2 decimals
                ", category='" + category + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", stockAvailable=" + stockAvailable +
                ", description='" + description + '\'' +
                '}';
    }
}
