package com.webApp.ECommerce.service;

import com.webApp.ECommerce.model.Product;
import com.webApp.ECommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProduct(int prodId) {
        return productRepository.findById(prodId).orElse(new Product());
    }

    public Product addProduct(Product product) {
        productRepository.save(product);
        return product;
    }

    public Product updateProduct(int prodId, Product product) {
        productRepository.save(product);
        return product;
    }


    public String deleteProduct(int prodId) {
        productRepository.deleteById(prodId);
        return "Deleted Successfully";
    }
}
