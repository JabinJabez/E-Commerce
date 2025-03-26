package com.webApp.ECommerce.controller;

import com.webApp.ECommerce.model.Product;
import com.webApp.ECommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{prodId}")
    public Product getProduct(@PathVariable int prodId) {
        return productService.getProduct(prodId);
    }

    @PostMapping("/add-product")
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    @PutMapping("/{prodId}")
    public Product updateProduct(@PathVariable int prodId, @RequestBody Product product) {
        return productService.updateProduct(prodId, product);
    }

    @DeleteMapping("/{prodId}")
    public String deleteProduct(@PathVariable int prodId) {
        return productService.deleteProduct(prodId);
    }
}
