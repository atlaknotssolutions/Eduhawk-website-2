// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Fetch All Products
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await fetch("https://api.eduhawk.in/api/product");

//       if (!res.ok) {
//         throw new Error(`HTTP ${res.status} – ${res.statusText}`);
//       }

//       const json = await res.json();
//       console.log("Products raw response:", json);

//       const productArray = Array.isArray(json)
//         ? json
//         : Array.isArray(json?.data)
//           ? json.data
//           : (json?.products ?? json?.results ?? []);

//       return productArray;
//     } catch (err) {
//       return rejectWithValue(err.message || "Failed to load products");
//     }
//   },
// );

// // Fetch Single Product by ID
// export const fetchProductById = createAsyncThunk(
//   "products/fetchProductById",
//   async (id, { rejectWithValue }) => {
//     try {
//       const res = await fetch(`https://api.eduhawk.in/api/product/${id}`);

//       if (!res.ok) {
//         throw new Error(`HTTP ${res.status} – ${res.statusText}`);
//       }

//       const json = await res.json();
//       console.log("Single Product raw response:", json);

//       const product = json?.data ?? json;
//       if (!product) throw new Error("Product not found");

//       return product;
//     } catch (err) {
//       return rejectWithValue(err.message || "Failed to fetch product");
//     }
//   },
// );

// const initialState = {
//   products: [],
//   currentProduct: null,
//   relatedPosts: [],
//   status: "idle",
//   detailStatus: "idle",
//   error: null,
//   categories: ["All"],
//   activeCategory: "All",
//   searchQuery: "",
//   currentPage: 1,
//   itemsPerPage: 9,
// };

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     setActiveCategory: (state, action) => {
//       state.activeCategory = action.payload;
//       state.currentPage = 1;
//     },
//     setSearchQuery: (state, action) => {
//       state.searchQuery = action.payload.trim();
//       state.currentPage = 1;
//     },
//     setCurrentPage: (state, action) => {
//       state.currentPage = Number(action.payload);
//     },
//     resetFilters: (state) => {
//       state.activeCategory = "All";
//       state.searchQuery = "";
//       state.currentPage = 1;
//     },
//     clearCurrentProduct: (state) => {
//       state.currentProduct = null;
//       state.relatedPosts = [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.products = action.payload;

//         const uniqueCategories = [
//           "All",
//           ...new Set(
//             action.payload
//               .map((p) => p?.category?.name ?? null)
//               .filter(Boolean),
//           ),
//         ];
//         state.categories = uniqueCategories;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })

//       .addCase(fetchProductById.pending, (state) => {
//         state.detailStatus = "loading";
//         state.error = null;
//       })
//       .addCase(fetchProductById.fulfilled, (state, action) => {
//         state.detailStatus = "succeeded";
//         state.currentProduct = action.payload;
//       })
//       .addCase(fetchProductById.rejected, (state, action) => {
//         state.detailStatus = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// export const {
//   setActiveCategory,
//   setSearchQuery,
//   setCurrentPage,
//   resetFilters,
//   clearCurrentProduct,
// } = productsSlice.actions;

// // ====================== SELECTORS ======================
// export const selectProducts = (state) => state.products.products;
// export const selectCurrentProduct = (state) => state.products.currentProduct;
// export const selectDetailStatus = (state) => state.products.detailStatus;
// export const selectCategories = (state) => state.products.categories;
// export const selectActiveCategory = (state) => state.products.activeCategory;
// export const selectSearchQuery = (state) => state.products.searchQuery;
// export const selectProductsStatus = (state) => state.products.status;
// export const selectProductsError = (state) => state.products.error;
// export const selectCurrentPage = (state) => state.products.currentPage;
// export const selectItemsPerPage = (state) => state.products.itemsPerPage;

// // Combined selector for Blog List Page (This was missing!)
// export const selectVisibleProducts = (state) => {
//   const { products, activeCategory, searchQuery, currentPage, itemsPerPage } =
//     state.products;

//   let result = products;

//   // Category Filter
//   if (activeCategory !== "All") {
//     result = result.filter((p) => p?.category?.name === activeCategory);
//   }

//   // Search Filter
//   if (searchQuery) {
//     const lowerQuery = searchQuery.toLowerCase();
//     result = result.filter((p) =>
//       (p?.name || "").toLowerCase().includes(lowerQuery),
//     );
//   }

//   // Pagination
//   const totalItems = result.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
//   const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
//   const startIndex = (safeCurrentPage - 1) * itemsPerPage;
//   const paginatedItems = result.slice(startIndex, startIndex + itemsPerPage);

//   return {
//     items: paginatedItems,
//     totalItems,
//     totalPages,
//     currentPage: safeCurrentPage,
//   };
// };

// export const selectFilteredProducts = selectVisibleProducts;

// export default productsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch All Products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://api.eduhawk.in/api/product");

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} – ${res.statusText}`);
      }

      const json = await res.json();
      console.log("Products raw response:", json);

      const productArray = Array.isArray(json)
        ? json
        : Array.isArray(json?.data)
          ? json.data
          : (json?.products ?? json?.results ?? []);

      return productArray;
    } catch (err) {
      return rejectWithValue(err.message || "Failed to load products");
    }
  },
);

// Fetch Single Product by slug or ID with fallback support
export const fetchProductBySlugOrId = createAsyncThunk(
  "products/fetchProductBySlugOrId",
  async (value, { rejectWithValue }) => {
    const target = value?.toString?.().trim();
    if (!target) {
      return rejectWithValue("Invalid blog identifier");
    }

    const endpointCandidates = [
      `https://api.eduhawk.in/api/blog/${target}`,
      `https://api.eduhawk.in/api/product/${target}`,
      `https://api.eduhawk.in/api/product/slug/${target}`,
    ];

    const fetchCandidate = async (url) => {
      const res = await fetch(url);
      if (res.status === 404) {
        return null;
      }
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} – ${res.statusText}`);
      }
      return res;
    };

    try {
      for (const url of endpointCandidates) {
        const res = await fetchCandidate(url);
        if (!res) continue;

        const json = await res.json();
        console.log("Single Product raw response:", json);

        const product = json?.data ?? json;
        if (product) {
          return product;
        }
      }
      throw new Error("Product not found");
    } catch (err) {
      return rejectWithValue(err.message || "Failed to fetch product");
    }
  },
);

const initialState = {
  products: [],
  currentProduct: null,
  relatedPosts: [],
  status: "idle",
  detailStatus: "idle",
  error: null,
  categories: ["All"],
  activeCategory: "All",
  searchQuery: "",
  currentPage: 1,
  itemsPerPage: 9,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
      state.currentPage = 1;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload.trim();
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = Number(action.payload);
    },
    resetFilters: (state) => {
      state.activeCategory = "All";
      state.searchQuery = "";
      state.currentPage = 1;
    },
    clearCurrentProduct: (state) => {
      state.currentProduct = null;
      state.relatedPosts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch All Products
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;

        const uniqueCategories = [
          "All",
          ...new Set(
            action.payload
              .map((p) => p?.category?.name ?? null)
              .filter(Boolean),
          ),
        ];
        state.categories = uniqueCategories;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Fetch Single Product by Slug or ID
      .addCase(fetchProductBySlugOrId.pending, (state) => {
        state.detailStatus = "loading";
        state.error = null;
      })
      .addCase(fetchProductBySlugOrId.fulfilled, (state, action) => {
        state.detailStatus = "succeeded";
        state.currentProduct = action.payload;
      })
      .addCase(fetchProductBySlugOrId.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  setActiveCategory,
  setSearchQuery,
  setCurrentPage,
  resetFilters,
  clearCurrentProduct,
} = productsSlice.actions;

// ====================== SELECTORS ======================
export const selectProducts = (state) => state.products.products;
export const selectCurrentProduct = (state) => state.products.currentProduct;
export const selectDetailStatus = (state) => state.products.detailStatus;
export const selectCategories = (state) => state.products.categories;
export const selectActiveCategory = (state) => state.products.activeCategory;
export const selectSearchQuery = (state) => state.products.searchQuery;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;
export const selectCurrentPage = (state) => state.products.currentPage;
export const selectItemsPerPage = (state) => state.products.itemsPerPage;

// Visible Products Selector (with pagination & filters)
export const selectVisibleProducts = (state) => {
  const { products, activeCategory, searchQuery, currentPage, itemsPerPage } =
    state.products;

  let result = products;

  // Category Filter
  if (activeCategory !== "All") {
    result = result.filter((p) => p?.category?.name === activeCategory);
  }

  // Search Filter
  if (searchQuery) {
    const lowerQuery = searchQuery.toLowerCase();
    result = result.filter((p) =>
      (p?.name || "").toLowerCase().includes(lowerQuery),
    );
  }

  // Pagination
  const totalItems = result.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const paginatedItems = result.slice(startIndex, startIndex + itemsPerPage);

  return {
    items: paginatedItems,
    totalItems,
    totalPages,
    currentPage: safeCurrentPage,
  };
};

export default productsSlice.reducer;
