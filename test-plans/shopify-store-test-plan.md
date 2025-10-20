    # Shopify Store (istqb15-1-qa4) - Comprehensive Test Plan

    ## Application Overview

    The istqb15-1-qa4 Shopify store is a test e-commerce platform featuring snowboard products and accessories. The application provides:

    - **Password Protection**: Store access requires password authentication (password: '1')
    - **Product Catalog**: 13 products including snowboards, ski wax, and gift cards
    - **Product Management**: Products with various states (in-stock, sold out, on sale)
    - **Shopping Cart**: Add to cart functionality with quantity management
    - **Search Functionality**: Predictive search with suggestions and product results
    - **Product Reviews**: Review system integration (via iframe)
    - **Contact Form**: Customer communication channel
    - **Navigation**: Header navigation with Home, Catalog, and Contact pages
    - **Filtering & Sorting**: Product collection filters and sort options
    - **Responsive Design**: Mobile-friendly interface
    - **Payment Methods**: Multiple payment options displayed (Visa, Mastercard, Amex, PayPal, Diners Club, Discover)

    ## Test Scenarios

    ### 1. Store Access & Authentication

    **Seed:** `tests/seed.spec.ts`

    #### 1.1 Access Store with Valid Password
    **Preconditions:** Browser navigated to https://istqb15-1-qa4.myshopify.com/

    **Steps:**
    1. Verify password protection page is displayed
    2. Verify page heading shows "istqb15-1-qa4"
    3. Verify message states "This store is password protected. Use the password to enter the store."
    4. Click in the "Enter store password" input field
    5. Type "1" (the valid password)
    6. Click the "Enter" button

    **Expected Results:**
    - User is redirected to the store homepage
    - Homepage displays featured products section
    - Navigation menu is accessible (Home, Catalog, Contact)
    - Cart and Search buttons are visible in header

    #### 1.2 Access Store with Invalid Password
    **Preconditions:** Browser navigated to https://istqb15-1-qa4.myshopify.com/

    **Steps:**
    1. Navigate to the store URL
    2. In the "Enter store password" field, type "invalid123"
    3. Click the "Enter" button

    **Expected Results:**
    - User remains on the password page
    - Error message is displayed indicating invalid password
    - Password field is cleared or highlighted
    - User cannot access the store

    #### 1.3 Access Store with Empty Password
    **Preconditions:** Browser navigated to https://istqb15-1-qa4.myshopify.com/

    **Steps:**
    1. Navigate to the store URL
    2. Leave the "Enter store password" field empty
    3. Click the "Enter" button

    **Expected Results:**
    - Validation error appears or form submission is prevented
    - User remains on the password page
    - Password field may show required field indicator

    #### 1.4 Store Owner Login Link
    **Preconditions:** On password protection page

    **Steps:**
    1. Navigate to the store URL
    2. Locate the "Are you the store owner? Log in here" text and link
    3. Click the "Log in here" link

    **Expected Results:**
    - User is redirected to /admin login page
    - Admin authentication form is displayed

    ---

    ### 2. Homepage Navigation & Display

    **Seed:** `tests/seed.spec.ts`

    #### 2.1 Homepage Load and Display
    **Preconditions:** User is authenticated and on homepage

    **Steps:**
    1. Access the store with valid password
    2. Verify homepage loads completely
    3. Observe all page sections

    **Expected Results:**
    - Hero section displays "Generated test data" heading
    - Description text: "A theme and populated test store by Shopify to help you test commerce primitives."
    - "Shop products" link is visible
    - "Featured products" section displays with product carousel
    - Products show images, names, and prices
    - Footer displays with Quick links, Resources, and Payment methods
    - Copyright shows "© 2025, istqb15-1-qa4"

    #### 2.2 Header Navigation Menu
    **Preconditions:** User is on any page of the store

    **Steps:**
    1. Locate the header navigation menu
    2. Verify all navigation links are present
    3. Click "Home" link
    4. Verify page navigation
    5. Click "Catalog" link
    6. Verify page navigation
    7. Click "Contact" link
    8. Verify page navigation

    **Expected Results:**
    - Navigation menu displays three links: Home, Catalog, Contact
    - Each link is clickable and navigates to correct page
    - Active page may show visual indicator
    - Store logo/name is clickable and returns to homepage

    #### 2.3 Featured Products Carousel Navigation
    **Preconditions:** User is on homepage

    **Steps:**
    1. Scroll to "Featured products" section
    2. Observe initial products displayed (should show 4 products per view)
    3. Note the carousel navigation controls
    4. Click the "Slide right" button
    5. Observe product carousel advancement
    6. Click the "Slide left" button (if enabled)
    7. Observe product carousel movement

    **Expected Results:**
    - Carousel initially shows products 1-4
    - Pagination indicator shows "1 / of 4" pages
    - "Slide left" button is disabled on first page
    - "Slide right" button successfully advances carousel
    - Product images and information remain intact during transition
    - "Slide left" button becomes enabled after advancing

    #### 2.4 Featured Product Quick View
    **Preconditions:** User is on homepage viewing featured products

    **Steps:**
    1. Locate a featured product card (e.g., "The Collection Snowboard: Liquid")
    2. Observe product information displayed
    3. Click on product image or title
    4. Verify navigation to product detail page

    **Expected Results:**
    - Each product card shows:
    - Product image
    - Product name
    - Price (with "Regular price" label)
    - Sale badge (if applicable)
    - "Sold out" indicator (if applicable)
    - Clicking product navigates to detailed product page
    - URL updates to /products/[product-handle]

    ---

    ### 3. Product Catalog & Filtering

    **Seed:** `tests/seed.spec.ts`

    #### 3.1 View All Products in Catalog
    **Preconditions:** User is authenticated

    **Steps:**
    1. Click "Catalog" in main navigation
    2. Wait for catalog page to load
    3. Observe page heading and product count
    4. Scroll through all products

    **Expected Results:**
    - Page heading displays "Collection: Products"
    - Product count status shows "13 products"
    - All 13 products are displayed in grid layout
    - Each product shows image, name, price
    - Sold out products show "Sold out" badge
    - Sale products show "Sale" badge with original and sale prices

    #### 3.2 Sort Products - Alphabetically A-Z
    **Preconditions:** User is on Catalog page

    **Steps:**
    1. Navigate to Catalog page
    2. Locate the "Sort by:" dropdown
    3. Click the dropdown to expand options
    4. Select "Alphabetically, A-Z"
    5. Observe product order

    **Expected Results:**
    - Dropdown shows current selection
    - Products are reordered alphabetically by name (A to Z)
    - First product should be "Gift Card"
    - Page updates without full reload
    - Product count remains unchanged

    #### 3.3 Sort Products - Price Low to High
    **Preconditions:** User is on Catalog page

    **Steps:**
    1. Navigate to Catalog page
    2. Click "Sort by:" dropdown
    3. Select "Price, low to high"
    4. Observe product order

    **Expected Results:**
    - Products reorder by price ascending
    - Lowest priced item appears first
    - Highest priced item appears last
    - Product count remains "13 products"

    #### 3.4 Sort Products - Price High to Low
    **Preconditions:** User is on Catalog page

    **Steps:**
    1. Navigate to Catalog page
    2. Click "Sort by:" dropdown
    3. Select "Price, high to low"
    4. Observe product order

    **Expected Results:**
    - Products reorder by price descending
    - Highest priced item (The 3p Fulfilled Snowboard - $2,629.95) appears first
    - Lowest priced item appears last

    #### 3.5 Filter Products
    **Preconditions:** User is on Catalog page

    **Steps:**
    1. Navigate to Catalog page
    2. Locate the "Filter" button
    3. Click the "Filter" button
    4. Observe filter panel opens
    5. Apply available filters
    6. Verify filtered results

    **Expected Results:**
    - Filter button opens filter panel/dialog
    - Available filter options are displayed
    - Selecting filters updates product display
    - Product count updates to reflect filtered results
    - Filters can be cleared to show all products again

    #### 3.6 Product Grid Display Consistency
    **Preconditions:** User is on Catalog page

    **Steps:**
    1. Navigate to Catalog page
    2. Observe all product cards
    3. Verify consistency across products

    **Expected Results:**
    - All product cards have consistent layout
    - Images are uniform size
    - Product names are clearly visible
    - Prices are formatted consistently (e.g., "$600.00")
    - Sale prices show both regular and sale price
    - Sold out products clearly marked

    ---

    ### 4. Product Detail Page - Available Product

    **Seed:** `tests/seed.spec.ts`

    #### 4.1 View Product Details - The Collection Snowboard: Hydrogen
    **Preconditions:** User is authenticated

    **Steps:**
    1. Navigate to https://istqb15-1-qa4.myshopify.com/products/the-collection-snowboard-hydrogen
    2. Wait for page to fully load
    3. Observe all product information

    **Expected Results:**
    - Page title shows "The Collection Snowboard: Hydrogen – istqb15-1-qa4"
    - Product heading displays "The Collection Snowboard: Hydrogen"
    - Vendor name shows "Hydrogen Vendor"
    - Price displays "Regular price $600.00"
    - Product image is displayed prominently
    - "Add to cart" button is enabled and visible
    - "Buy it now" button is enabled and visible
    - Related products section appears below
    - Review section (iframe) is displayed

    #### 4.2 Product Image Display
    **Preconditions:** User is on product detail page for "The Collection Snowboard: Hydrogen"

    **Steps:**
    1. Navigate to product page
    2. Locate the Gallery Viewer region
    3. Observe the product image
    4. Click "Skip to product information" link (if testing accessibility)

    **Expected Results:**
    - Main product image displays clearly
    - Image shows top and bottom view of snowboard
    - Image alt text describes the product
    - Gallery viewer allows image interaction
    - "Skip to product information" link navigates to product info section

    #### 4.3 Related Products Display
    **Preconditions:** User is on any product detail page

    **Steps:**
    1. Navigate to a product page
    2. Scroll to "Related products" section
    3. Observe related products displayed
    4. Click on a related product

    **Expected Results:**
    - "Related products" heading is visible
    - 4 related products are displayed
    - Each related product shows image, name, and price
    - Clicking related product navigates to that product's page
    - Product recommendation tracking parameters may be in URL

    #### 4.4 Product Reviews Section
    **Preconditions:** User is on product detail page

    **Steps:**
    1. Navigate to a product page
    2. Scroll to the reviews section (iframe)
    3. Observe review interface
    4. Note the "Write a review" button
    5. Note the rating display (0 stars if no reviews)

    **Expected Results:**
    - Review section displays via iframe
    - Rating shows "0" with empty star icons for products without reviews
    - "Write a review" button is visible and clickable
    - Message displays "Be the first to write a review" for products without reviews
    - Sort reviews dropdown is available

    ---

    ### 5. Product Detail Page - Sold Out Product (The 3p Fulfilled Snowboard)

    **Seed:** `tests/seed.spec.ts`

    #### 5.1 View Sold Out Product Details
    **Preconditions:** User is authenticated

    **Steps:**
    1. Navigate to https://istqb15-1-qa4.myshopify.com/products/the-3p-fulfilled-snowboard
    2. Wait for page to load
    3. Observe product information and availability

    **Expected Results:**
    - Page title shows "The 3p Fulfilled Snowboard – istqb15-1-qa4"
    - Product heading displays "The 3p Fulfilled Snowboard"
    - Vendor shows "istqb15-1-qa4"
    - Price displays "Regular price $2,629.95"
    - Product image is displayed
    - "Sold out" status is prominently displayed
    - "Sold out" button is visible but disabled
    - "Buy it now" button is disabled
    - Related products section is NOT displayed (different from in-stock products)

    #### 5.2 Attempt to Add Sold Out Product to Cart
    **Preconditions:** User is on "The 3p Fulfilled Snowboard" product page

    **Steps:**
    1. Navigate to the sold out product page
    2. Observe the "Sold out" button
    3. Attempt to click the "Sold out" button
    4. Attempt to click the "Buy it now" button

    **Expected Results:**
    - "Sold out" button is disabled and cannot be clicked
    - Button styling indicates disabled state
    - "Buy it now" button is also disabled
    - No cart interaction occurs
    - Product cannot be added to shopping cart

    #### 5.3 Sold Out Product in Catalog View
    **Preconditions:** User is on Catalog page

    **Steps:**
    1. Navigate to Catalog page
    2. Locate "The 3p Fulfilled Snowboard" in product grid
    3. Observe product card display
    4. Compare with in-stock product cards

    **Expected Results:**
    - Product card shows "Sold out" badge/overlay
    - Product image may have reduced opacity or overlay
    - Price is still displayed ($2,629.95)
    - Product is still clickable to view details
    - Product name includes "Sold out" indicator

    ---

    ### 6. Product Detail Page - Sale Product

    **Seed:** `tests/seed.spec.ts`

    #### 6.1 View Sale Product Details - The Compare at Price Snowboard
    **Preconditions:** User is authenticated

    **Steps:**
    1. Navigate to https://istqb15-1-qa4.myshopify.com/products/the-compare-at-price-snowboard
    2. Wait for page to load
    3. Observe pricing information

    **Expected Results:**
    - Product heading displays "The Compare at Price Snowboard"
    - Regular price shows "$885.95" with strikethrough or "Regular price" label
    - Sale price displays "$785.95" with "Sale price" label
    - "Sale" badge/indicator is prominently displayed
    - Savings amount is clear ($100.00 off)
    - "Add to cart" button is enabled
    - "Buy it now" button is enabled
    - Product image displays correctly

    #### 6.2 Sale Product in Catalog View
    **Preconditions:** User is on Catalog page

    **Steps:**
    1. Navigate to Catalog page
    2. Locate "The Compare at Price Snowboard" in product grid
    3. Observe sale price display in grid

    **Expected Results:**
    - Product card shows "Sale" badge
    - Both regular and sale prices are displayed
    - Regular price has strikethrough styling
    - Sale price is emphasized
    - Product stands out from regular-priced items

    ---

    ### 7. Shopping Cart Functionality

    **Seed:** `tests/seed.spec.ts`

    #### 7.1 Add Product to Cart
    **Preconditions:** User is on an available product page (e.g., The Collection Snowboard: Hydrogen)

    **Steps:**
    1. Navigate to product page
    2. Click the "Add to cart" button
    3. Observe cart behavior

    **Expected Results:**
    - Cart dialog/drawer opens automatically
    - Product appears in cart with correct details:
    - Product image
    - Product name
    - Unit price ($600.00)
    - Quantity (1)
    - Line total ($600.00)
    - Cart badge in header updates to show "1 item"
    - Subtotal displays "$600.00 USD"
    - Message shows "Taxes and shipping calculated at checkout"
    - "Check out" button is visible and enabled

    #### 7.2 Increase Product Quantity in Cart
    **Preconditions:** Cart contains one item

    **Steps:**
    1. With cart open showing 1 item
    2. Locate quantity controls for the product
    3. Click the "Increase quantity" button (+)
    4. Observe quantity and price updates

    **Expected Results:**
    - Quantity updates from 1 to 2
    - Line total updates to $1,200.00 (2 × $600.00)
    - Subtotal updates to "$1,200.00 USD"
    - Cart badge updates to "2 items"
    - Loading indicator may briefly appear during update

    #### 7.3 Decrease Product Quantity in Cart
    **Preconditions:** Cart contains item with quantity of 2 or more

    **Steps:**
    1. Open cart with product quantity of 2
    2. Click the "Decrease quantity" button (-)
    3. Observe quantity and price updates

    **Expected Results:**
    - Quantity decreases by 1 (e.g., from 2 to 1)
    - Line total updates accordingly
    - Subtotal recalculates
    - Cart badge updates item count

    #### 7.4 Remove Product from Cart
    **Preconditions:** Cart contains at least one item

    **Steps:**
    1. Open cart drawer
    2. Locate the remove/delete button for a product (trash icon)
    3. Click the remove button
    4. Observe cart updates

    **Expected Results:**
    - Product is removed from cart immediately
    - Cart updates to reflect removal
    - If cart is now empty, appropriate empty cart message may appear
    - Subtotal updates to $0.00 or reflects remaining items
    - Cart badge updates count or shows empty state

    #### 7.5 View Cart from Header
    **Preconditions:** Cart contains 1 or more items

    **Steps:**
    1. Navigate to any page
    2. Locate cart button in header (shows item count)
    3. Click the cart button
    4. Observe cart drawer opens

    **Expected Results:**
    - Cart button displays current item count badge
    - Clicking cart opens cart drawer/dialog
    - All cart items are displayed
    - Cart totals are accurate
    - User can modify cart or proceed to checkout

    #### 7.6 Close Cart Drawer
    **Preconditions:** Cart drawer is open

    **Steps:**
    1. Open cart drawer
    2. Locate the "Close" button (X icon)
    3. Click "Close" button
    4. Alternatively, click outside cart drawer area

    **Expected Results:**
    - Cart drawer closes smoothly
    - User returns to previous page view
    - Cart contents are preserved
    - Header cart badge still shows item count

    #### 7.7 Add Multiple Different Products to Cart
    **Preconditions:** Cart is empty or has existing items

    **Steps:**
    1. Navigate to first product page (e.g., The Collection Snowboard: Hydrogen)
    2. Click "Add to cart"
    3. Close cart drawer
    4. Navigate to second product page (e.g., The Collection Snowboard: Liquid)
    5. Click "Add to cart"
    6. View cart contents

    **Expected Results:**
    - Both products appear in cart as separate line items
    - Each product shows correct price and quantity
    - Subtotal is sum of all items
    - Cart badge shows total quantity across all items

    #### 7.8 Update Quantity via Direct Input
    **Preconditions:** Cart contains at least one item

    **Steps:**
    1. Open cart drawer
    2. Locate quantity spinbutton/input field
    3. Click in the quantity field
    4. Type a new quantity (e.g., "5")
    5. Tab out or press Enter

    **Expected Results:**
    - Quantity updates to entered value
    - Line total recalculates immediately
    - Subtotal updates accordingly
    - If quantity is invalid (0, negative, non-numeric), appropriate handling occurs

    ---

    ### 8. Checkout Flow (Initial Steps)

    **Seed:** `tests/seed.spec.ts`

    #### 8.1 Initiate Checkout from Cart
    **Preconditions:** Cart contains at least one item

    **Steps:**
    1. Add product to cart
    2. Open cart drawer
    3. Verify subtotal is displayed
    4. Click "Check out" button

    **Expected Results:**
    - User is redirected to Shopify checkout page
    - URL changes to checkout domain
    - Cart contents are passed to checkout
    - Checkout page displays cart summary
    - Customer information form is presented

    #### 8.2 Buy It Now Direct Checkout
    **Preconditions:** User is on an available product page

    **Steps:**
    1. Navigate to product page (e.g., The Collection Snowboard: Hydrogen)
    2. Click "Buy it now" button (do not add to cart first)
    3. Observe behavior

    **Expected Results:**
    - User is immediately directed to checkout
    - Product is added to order
    - Checkout page opens with product
    - Faster checkout flow compared to cart method

    ---

    ### 9. Search Functionality

    **Seed:** `tests/seed.spec.ts`

    #### 9.1 Open Search Dialog
    **Preconditions:** User is on any page

    **Steps:**
    1. Locate Search button in header
    2. Click the Search button
    3. Observe search dialog opens

    **Expected Results:**
    - Search dialog/modal opens
    - Search input field is automatically focused
    - Placeholder text may be present
    - Close button (X) is visible
    - Dialog overlays page content

    #### 9.2 Search for Existing Products
    **Preconditions:** Search dialog is open

    **Steps:**
    1. Open search dialog
    2. Type "snowboard" in search field
    3. Wait for search results to appear
    4. Observe results

    **Expected Results:**
    - Autocomplete suggestions appear dynamically
    - Results divided into sections:
    - "Suggestions" (e.g., "snowboard", "stock snowboard", "price snowboard")
    - "Products" (showing product images, names)
    - Status message shows count (e.g., "10 results: 3 suggestions, 7 products")
    - Products matching query are displayed with images
    - Search term is highlighted in suggestions
    - "Search for 'snowboard'" option appears at bottom

    #### 9.3 Select Product from Search Results
    **Preconditions:** Search dialog showing results

    **Steps:**
    1. Type "snowboard" in search
    2. Wait for results to populate
    3. Click on a product from results (e.g., "The Complete Snowboard")

    **Expected Results:**
    - User is navigated to selected product page
    - Search dialog closes
    - Product detail page loads
    - URL includes search tracking parameters

    #### 9.4 Select Search Suggestion
    **Preconditions:** Search dialog showing results

    **Steps:**
    1. Type "snowboard" in search
    2. Observe suggestions appear
    3. Click on a suggestion (e.g., "stock snowboard")

    **Expected Results:**
    - User is redirected to search results page
    - URL shows search query: /search?q=stock+snowboard
    - All products matching query are displayed

    #### 9.5 Submit Search Query
    **Preconditions:** Search dialog is open

    **Steps:**
    1. Type "snowboard" in search field
    2. Click the "Search for 'snowboard'" option OR press Enter
    3. Observe navigation

    **Expected Results:**
    - User is taken to full search results page
    - URL: /search?q=snowboard
    - All matching products displayed
    - Search term shown in page
    - Results can be filtered/sorted

    #### 9.6 Search with No Results
    **Preconditions:** Search dialog is open

    **Steps:**
    1. Type "zzzzinvalidproduct123" in search field
    2. Wait for results
    3. Observe message

    **Expected Results:**
    - No products or suggestions appear
    - Message indicates "No results found" or similar
    - User can modify search term
    - Close button remains functional

    #### 9.7 Clear Search Query
    **Preconditions:** Search dialog open with text entered

    **Steps:**
    1. Type "snowboard" in search field
    2. Locate "Clear search term" button (X icon in input)
    3. Click the clear button

    **Expected Results:**
    - Search field is cleared
    - Results panel disappears or resets
    - Cursor remains in search field
    - User can type new query

    #### 9.8 Close Search Dialog
    **Preconditions:** Search dialog is open

    **Steps:**
    1. Open search dialog
    2. Click "Close" button (X)
    3. Alternatively, press Escape key
    4. Observe dialog behavior

    **Expected Results:**
    - Search dialog closes
    - User returns to previous page view
    - Any entered text is cleared
    - Page content is accessible again

    ---

    ### 10. Contact Form

    **Seed:** `tests/seed.spec.ts`

    #### 10.1 Access Contact Page
    **Preconditions:** User is authenticated

    **Steps:**
    1. Click "Contact" link in main navigation
    2. Wait for page to load
    3. Observe page content

    **Expected Results:**
    - Page heading displays "Contact"
    - Contact form section is visible with heading "Contact form"
    - Form fields are displayed:
    - Name (text input)
    - Email (text input, marked with *)
    - Phone number (text input)
    - Comment (textarea)
    - "Send" button is visible
    - Footer is displayed

    #### 10.2 Submit Valid Contact Form
    **Preconditions:** User is on Contact page

    **Steps:**
    1. Navigate to Contact page
    2. Click in "Name" field and type "John Doe"
    3. Click in "Email" field and type "john.doe@example.com"
    4. Click in "Phone number" field and type "+1234567890"
    5. Click in "Comment" field and type "I have a question about your products."
    6. Click "Send" button
    7. Observe submission result

    **Expected Results:**
    - Form submits successfully
    - Success message appears (e.g., "Thank you for contacting us")
    - Form fields may be cleared
    - Confirmation email may be sent (backend dependent)

    #### 10.3 Submit Contact Form with Missing Required Email
    **Preconditions:** User is on Contact page

    **Steps:**
    1. Navigate to Contact page
    2. Fill in "Name" field: "John Doe"
    3. Leave "Email" field empty
    4. Fill in "Phone number": "+1234567890"
    5. Fill in "Comment": "Test comment"
    6. Click "Send" button

    **Expected Results:**
    - Form does not submit
    - Email field shows validation error
    - Error message indicates "Email is required" or similar
    - User remains on form to correct error

    #### 10.4 Submit Contact Form with Invalid Email Format
    **Preconditions:** User is on Contact page

    **Steps:**
    1. Navigate to Contact page
    2. Fill in "Name": "John Doe"
    3. Fill in "Email": "invalid-email-format" (no @ or domain)
    4. Fill in "Phone number": "+1234567890"
    5. Fill in "Comment": "Test comment"
    6. Click "Send" button

    **Expected Results:**
    - Form validation triggers
    - Email field shows error: "Please enter a valid email address"
    - Form does not submit
    - User can correct email and retry

    #### 10.5 Submit Contact Form with Only Required Fields
    **Preconditions:** User is on Contact page

    **Steps:**
    1. Navigate to Contact page
    2. Leave "Name" field empty
    3. Fill in "Email": "john.doe@example.com" (required field)
    4. Leave "Phone number" field empty
    5. Leave "Comment" field empty
    6. Click "Send" button

    **Expected Results:**
    - Form submits successfully (only Email is required)
    - Success confirmation is displayed
    - Non-required fields can be left blank

    #### 10.6 Submit Contact Form with Maximum Length Input
    **Preconditions:** User is on Contact page

    **Steps:**
    1. Navigate to Contact page
    2. Fill "Name" with very long text (e.g., 500 characters)
    3. Fill "Email": "test@example.com"
    4. Fill "Comment" with very long text (e.g., 5000 characters)
    5. Click "Send" button

    **Expected Results:**
    - Form handles long input gracefully
    - Either accepts input if within limits
    - Or shows validation error if exceeds maximum
    - Form fields may have character counters
    - Text areas may have scrolling

    #### 10.7 Navigate Away from Contact Form with Unsaved Changes
    **Preconditions:** User is on Contact page with partial form completion

    **Steps:**
    1. Navigate to Contact page
    2. Fill in some form fields (e.g., Name and Email)
    3. Click "Home" in navigation without submitting
    4. Observe behavior

    **Expected Results:**
    - User navigates to Home page
    - Form data is not saved
    - No warning prompt may appear (depends on implementation)
    - User can return to Contact page with fresh form

    ---

    ### 11. Footer Navigation & Links

    **Seed:** `tests/seed.spec.ts`

    #### 11.1 Footer Quick Links
    **Preconditions:** User is on any page

    **Steps:**
    1. Scroll to page footer
    2. Locate "Quick links" section
    3. Click "Home" link in footer
    4. Verify navigation to home
    5. Return to another page and click "Catalog" in footer
    6. Verify navigation to catalog
    7. Return to another page and click "Contact" in footer
    8. Verify navigation to contact page

    **Expected Results:**
    - Footer "Quick links" section displays on all pages
    - All three links (Home, Catalog, Contact) are functional
    - Clicking each link navigates to correct page
    - Footer remains accessible at bottom of page

    #### 11.2 Footer Resources Links
    **Preconditions:** User is on any page

    **Steps:**
    1. Scroll to footer
    2. Locate "Resources" section
    3. Click "Generated test data docs" link
    4. Observe navigation (opens in new tab)
    5. Return and click "GraphiQL API explorer" link
    6. Observe navigation

    **Expected Results:**
    - "Generated test data docs" opens Shopify documentation
    - Links open in new tab/window (target="_blank")
    - External links navigate to Shopify developer resources
    - User can return to store

    #### 11.3 Footer Payment Methods Display
    **Preconditions:** User is on any page

    **Steps:**
    1. Scroll to footer
    2. Locate payment methods section
    3. Observe all payment icons displayed

    **Expected Results:**
    - "Payment methods" label is visible
    - Six payment method icons displayed:
    - Visa
    - Mastercard
    - American Express
    - PayPal
    - Diners Club
    - Discover
    - Icons are clear and recognizable
    - Alt text is present for accessibility

    #### 11.4 Footer Copyright and Powered by Shopify
    **Preconditions:** User is on any page

    **Steps:**
    1. Scroll to footer
    2. Observe copyright information
    3. Click "istqb15-1-qa4" link
    4. Observe navigation
    5. Click "Powered by Shopify" link
    6. Observe navigation

    **Expected Results:**
    - Copyright text shows "© 2025, istqb15-1-qa4"
    - Store name link navigates to homepage
    - "Powered by Shopify" link opens Shopify main site
    - All footer links are functional

    #### 11.5 Privacy Policy Link
    **Preconditions:** User is on any page

    **Steps:**
    1. Scroll to footer
    2. Locate "Privacy policy" link
    3. Click the privacy policy link
    4. Observe page load

    **Expected Results:**
    - Privacy policy page loads
    - URL changes to /policies/privacy-policy
    - Privacy policy content is displayed
    - User can navigate back to store

    ---

    ### 12. Accessibility Features

    **Seed:** `tests/seed.spec.ts`

    #### 12.1 Skip to Content Link
    **Preconditions:** User loads any page

    **Steps:**
    1. Navigate to any page
    2. Press Tab key immediately on page load
    3. Observe "Skip to content" link appears
    4. Press Enter to activate link
    5. Observe focus movement

    **Expected Results:**
    - "Skip to content" link becomes visible on first Tab
    - Link is positioned at top of page
    - Activating link skips navigation and goes to main content
    - Focus moves to #MainContent
    - Improves keyboard navigation efficiency

    #### 12.2 Keyboard Navigation Through Products
    **Preconditions:** User is on Catalog page

    **Steps:**
    1. Navigate to Catalog page
    2. Use Tab key to navigate through products
    3. Observe focus indicators
    4. Press Enter on a focused product
    5. Verify product page opens

    **Expected Results:**
    - Tab key moves focus through all interactive elements
    - Focus indicators are clearly visible
    - Products are keyboard accessible
    - Enter key activates product links
    - Focus order is logical (top to bottom, left to right)

    #### 12.3 Cart Keyboard Accessibility
    **Preconditions:** Cart contains items

    **Steps:**
    1. Open cart drawer using Tab + Enter on cart button
    2. Use Tab to navigate through cart elements
    3. Use Enter/Space to interact with quantity buttons
    4. Tab to "Check out" button and press Enter

    **Expected Results:**
    - All cart controls are keyboard accessible
    - Quantity buttons respond to Enter/Space
    - Remove buttons are keyboard accessible
    - Focus remains trapped within open cart drawer
    - Escape key closes cart drawer

    ---

    ### 13. Responsive Design & Mobile View

    **Seed:** `tests/seed.spec.ts`

    #### 13.1 Mobile Navigation Menu
    **Preconditions:** Browser viewport set to mobile size (e.g., 375px width)

    **Steps:**
    1. Resize browser to mobile viewport
    2. Observe header navigation
    3. Look for hamburger menu icon
    4. Interact with mobile navigation

    **Expected Results:**
    - Header adapts to mobile viewport
    - Hamburger menu icon may appear
    - Navigation links may be hidden in mobile menu
    - Cart and search remain accessible
    - Logo remains visible

    #### 13.2 Mobile Product Grid
    **Preconditions:** Mobile viewport active, user on Catalog page

    **Steps:**
    1. Set viewport to mobile size
    2. Navigate to Catalog page
    3. Observe product grid layout

    **Expected Results:**
    - Products display in single or dual column
    - Product cards stack vertically
    - Images scale appropriately
    - Text remains readable
    - Spacing is adequate for touch targets

    #### 13.3 Mobile Cart Drawer
    **Preconditions:** Mobile viewport, cart contains items

    **Steps:**
    1. Set viewport to mobile size
    2. Open cart drawer
    3. Observe cart display and controls

    **Expected Results:**
    - Cart drawer covers full screen or slides from side
    - All cart functionality is accessible
    - Buttons are appropriately sized for touch
    - Quantity controls are touch-friendly
    - Close button is easily accessible

    ---

    ### 14. Edge Cases & Error Scenarios

    **Seed:** `tests/seed.spec.ts`

    #### 14.1 Direct URL Access to Product Page While Not Authenticated
    **Preconditions:** User not yet authenticated

    **Steps:**
    1. Open browser in incognito/private mode
    2. Navigate directly to https://istqb15-1-qa4.myshopify.com/products/the-collection-snowboard-hydrogen
    3. Observe redirect behavior

    **Expected Results:**
    - User is redirected to password page
    - Product page does not load without authentication
    - After entering password, user may be redirected to intended product page

    #### 14.2 Attempt to Add Same Product Multiple Times
    **Preconditions:** Cart is empty or has existing items

    **Steps:**
    1. Navigate to product page (e.g., The Collection Snowboard: Hydrogen)
    2. Click "Add to cart"
    3. Close cart drawer
    4. Click "Add to cart" again (same product)
    5. Open cart and observe

    **Expected Results:**
    - Product quantity increases in cart (e.g., from 1 to 2)
    - OR a second line item is created (depends on cart logic)
    - Total price updates correctly
    - Cart badge updates item count

    #### 14.3 Cart Persistence Across Page Refreshes
    **Preconditions:** Cart contains at least one item

    **Steps:**
    1. Add product to cart
    2. Verify cart shows item
    3. Refresh the page (F5 or Ctrl+R)
    4. Open cart drawer
    5. Verify cart contents

    **Expected Results:**
    - Cart contents persist after page refresh
    - Items, quantities, and prices remain intact
    - Cart badge still shows correct count
    - Session/cookies maintain cart state

    #### 14.4 Browser Back Button After Adding to Cart
    **Preconditions:** User has added item to cart

    **Steps:**
    1. Navigate to product page
    2. Add product to cart
    3. Cart drawer opens
    4. Close cart drawer
    5. Click browser back button
    6. Observe behavior

    **Expected Results:**
    - User navigates back to previous page
    - Cart contents are retained
    - Cart badge still shows item count
    - Cart can be reopened with items intact

    #### 14.5 Simultaneous Search Operations
    **Preconditions:** Search dialog is open

    **Steps:**
    1. Open search dialog
    2. Type "snow"
    3. Immediately type "board" before results appear
    4. Observe search handling

    **Expected Results:**
    - Search handles rapid typing gracefully
    - Results update based on final query "snowboard"
    - No duplicate or conflicting results
    - Loading states may appear briefly

    #### 14.6 Network Interruption During Cart Update
    **Preconditions:** Cart contains items, network throttling enabled in dev tools

    **Steps:**
    1. Open browser dev tools
    2. Enable network throttling (Slow 3G or offline)
    3. Attempt to increase quantity in cart
    4. Observe behavior

    **Expected Results:**
    - Loading indicator appears
    - Operation waits for network response
    - Error message may appear if timeout occurs
    - User can retry operation when network returns

    #### 14.7 Long Product Names and Descriptions
    **Preconditions:** Testing products with extensive names

    **Steps:**
    1. Navigate to product with long name
    2. Observe name display in various contexts:
    - Product detail page
    - Cart drawer
    - Catalog grid
    3. Verify text handling

    **Expected Results:**
    - Long names are truncated with ellipsis (...)
    - OR text wraps to multiple lines
    - Full name is visible on product detail page
    - Layout does not break
    - Hover may show full name (tooltip)

    #### 14.8 Special Characters in Search Query
    **Preconditions:** Search dialog is open

    **Steps:**
    1. Open search dialog
    2. Type special characters: "snow@board!", "$%^", "snow & board"
    3. Observe search handling

    **Expected Results:**
    - Search handles special characters safely
    - No JavaScript errors occur
    - Results may return empty or match anyway
    - Characters are properly encoded in URL

    #### 14.9 Maximum Cart Quantity
    **Preconditions:** Cart contains a product

    **Steps:**
    1. Open cart with one product
    2. Repeatedly click "Increase quantity"
    3. Attempt to increase to very high number (e.g., 100, 1000)
    4. Observe system behavior

    **Expected Results:**
    - System may enforce maximum quantity limit
    - Error message appears if limit exceeded
    - Inventory constraints may prevent high quantities
    - Cart remains functional

    #### 14.10 Sold Out Product Search and Selection
    **Preconditions:** User is authenticated

    **Steps:**
    1. Open search dialog
    2. Search for "3p fulfilled"
    3. Observe "The 3p Fulfilled Snowboard" in results
    4. Click on the sold out product from search
    5. Verify product page behavior

    **Expected Results:**
    - Sold out product appears in search results
    - May show "Sold out" indicator in results
    - Clicking navigates to product page
    - Product page clearly shows sold out status
    - Cannot add to cart

    ---

    ### 15. Performance & Load Testing

    **Seed:** `tests/seed.spec.ts`

    #### 15.1 Page Load Performance - Homepage
    **Preconditions:** User has authenticated

    **Steps:**
    1. Clear browser cache
    2. Navigate to homepage
    3. Measure page load time using browser dev tools
    4. Observe loading indicators

    **Expected Results:**
    - Page loads within acceptable time (e.g., < 3 seconds on good connection)
    - Images load progressively or with placeholders
    - Critical content loads first
    - No blocking resources delay interaction

    #### 15.2 Search Response Time
    **Preconditions:** Search dialog is open

    **Steps:**
    1. Open search dialog
    2. Type "snowboard"
    3. Measure time from last keypress to results appearing
    4. Repeat with different queries

    **Expected Results:**
    - Search results appear within 500ms
    - Autocomplete is responsive
    - No lag or stuttering during typing
    - Loading states are brief

    #### 15.3 Cart Update Performance
    **Preconditions:** Cart contains multiple items

    **Steps:**
    1. Add 3-5 different products to cart
    2. Open cart drawer
    3. Change quantities for multiple items
    4. Observe update speed and responsiveness

    **Expected Results:**
    - Each quantity change updates quickly (< 1 second)
    - Subtotal recalculates immediately
    - Multiple rapid changes are handled smoothly
    - No UI blocking or freezing

    ---

    ### 16. Cross-Browser Compatibility

    **Seed:** `tests/seed.spec.ts`

    #### 16.1 Core Functionality in Chrome
    **Preconditions:** Test in Google Chrome browser

    **Steps:**
    1. Complete key user flows in Chrome:
    - Store authentication
    - Product browsing
    - Add to cart
    - Search
    - Contact form
    2. Verify all features work correctly

    **Expected Results:**
    - All functionality works as expected
    - Layout is correct
    - Animations are smooth
    - No console errors

    #### 16.2 Core Functionality in Firefox
    **Preconditions:** Test in Mozilla Firefox browser

    **Steps:**
    1. Repeat all key flows in Firefox
    2. Verify feature parity with Chrome
    3. Check for browser-specific issues

    **Expected Results:**
    - All features work identically to Chrome
    - Layout renders correctly
    - Form submissions work
    - JavaScript functions properly

    #### 16.3 Core Functionality in Safari
    **Preconditions:** Test in Safari browser (macOS/iOS)

    **Steps:**
    1. Repeat all key flows in Safari
    2. Pay attention to iOS-specific behaviors
    3. Verify touch interactions (if on iOS)

    **Expected Results:**
    - Features work on Safari
    - Layout is consistent
    - Touch interactions are responsive (iOS)
    - Date/time pickers use native controls

    ---

    ### 17. Security Testing

    **Seed:** `tests/seed.spec.ts`

    #### 17.1 XSS Prevention in Search
    **Preconditions:** Search dialog is open

    **Steps:**
    1. Open search dialog
    2. Type: `<script>alert('XSS')</script>`
    3. Submit search
    4. Observe handling

    **Expected Results:**
    - Script is not executed
    - Search query is sanitized or encoded
    - No alert appears
    - Application remains secure

    #### 17.2 SQL Injection Prevention in Contact Form
    **Preconditions:** User on Contact page

    **Steps:**
    1. Navigate to Contact page
    2. Fill Name field with: `'; DROP TABLE users; --`
    3. Fill Email: `test@example.com`
    4. Submit form
    5. Verify system behavior

    **Expected Results:**
    - Form input is sanitized
    - No database errors occur
    - Submission completes safely or is rejected
    - System remains operational

    #### 17.3 Session Management
    **Preconditions:** User is authenticated

    **Steps:**
    1. Log in with password
    2. Add items to cart
    3. Close browser completely
    4. Reopen browser and navigate to store
    5. Verify authentication and cart state

    **Expected Results:**
    - User may need to re-enter password (depending on session timeout)
    - Cart contents may persist via cookies
    - Session management is secure
    - No sensitive data exposed in URLs

    ---

    ### 18. API and Network Testing

    **Seed:** `tests/seed.spec.ts`

    #### 18.1 Monitor Network Calls During Product Add to Cart
    **Preconditions:** Browser dev tools network tab open

    **Steps:**
    1. Open dev tools Network tab
    2. Navigate to product page
    3. Click "Add to cart"
    4. Observe network requests

    **Expected Results:**
    - POST request to /cart/add endpoint
    - Successful response (200 status code)
    - Cart data returned in response
    - Appropriate headers (Content-Type, etc.)
    - AJAX request completes quickly

    #### 18.2 Monitor Network Calls During Search
    **Preconditions:** Network tab open, search dialog active

    **Steps:**
    1. Open Network tab
    2. Type "snowboard" in search
    3. Observe predictive search API calls

    **Expected Results:**
    - Search API called with query parameter
    - Requests are throttled/debounced (not on every keystroke)
    - JSON response with product data
    - Minimal latency
    - Proper error handling if request fails

    #### 18.3 Verify HTTPS Usage
    **Preconditions:** On any page of the store

    **Steps:**
    1. Check browser address bar for lock icon
    2. Verify URL begins with https://
    3. Open dev tools Security tab
    4. Verify SSL certificate

    **Expected Results:**
    - All pages use HTTPS
    - Valid SSL certificate
    - No mixed content warnings
    - Secure connection indicator present

    ---

    ## Test Data

    ### Valid Credentials
    - **Store Password:** `1`

    ### Test Products
    - **Available Product:** The Collection Snowboard: Hydrogen ($600.00)
    - **Sold Out Product:** The 3p Fulfilled Snowboard ($2,629.95)
    - **Sale Product:** The Compare at Price Snowboard (Regular: $885.95, Sale: $785.95)
    - **Other Products:** 10 additional products (Gift Card, Ski Wax, various snowboards)

    ### Test Contact Form Data
    - **Valid Email:** john.doe@example.com
    - **Invalid Email:** invalid-email-format
    - **Phone:** +1234567890
    - **Name:** John Doe
    - **Comment:** Test message about products

    ### Search Queries
    - **Valid Queries:** "snowboard", "snow", "hydrogen", "gift"
    - **No Results Query:** "zzzzinvalidproduct123"
    - **Special Characters:** "snow@board!", "$%^"

    ---

    ## Test Environment

    - **Store URL:** https://istqb15-1-qa4.myshopify.com/
    - **Product Page URL Example:** https://istqb15-1-qa4.myshopify.com/products/the-3p-fulfilled-snowboard
    - **Browsers:** Chrome, Firefox, Safari, Edge
    - **Devices:** Desktop, Tablet, Mobile
    - **Network Conditions:** Broadband, 3G, offline testing

    ---

    ## Notes & Assumptions

    1. **Starting State:** All test scenarios assume a fresh/blank state unless otherwise specified
    2. **Session Handling:** Tests assume user maintains authentication during session
    3. **Inventory:** Product availability (sold out status) may change; tests should adapt
    4. **External Links:** External Shopify docs/resources may change; verify links periodically
    5. **Checkout:** Full checkout flow requires Shopify checkout domain; may be out of scope for frontend testing
    6. **Review System:** Review functionality is embedded via iframe; may have limited test access
    7. **Product Count:** Catalog shows 13 products; verify count remains accurate if inventory changes
    8. **Localization:** Tests assume English (US) locale
    9. **Payment Processing:** Actual payment testing requires test credit cards and is typically done in staging
    10. **Backend Dependencies:** Some tests (contact form submission, cart persistence) depend on backend APIs being functional

    ---

    ## Success Criteria

    A test scenario passes when:
    - All steps can be completed as described
    - Expected results match actual behavior
    - No unexpected errors or warnings appear
    - UI displays correctly and is accessible
    - Performance is within acceptable limits
    - Data integrity is maintained
    - Security measures prevent malicious input

    ---

    ## Conclusion

    This comprehensive test plan covers the major functionality of the istqb15-1-qa4 Shopify store, with particular focus on the product detail pages including The 3p Fulfilled Snowboard. The test scenarios encompass functional testing, UI/UX validation, accessibility, security, and performance considerations. Testers should execute these scenarios systematically to ensure complete coverage and identify any defects or areas for improvement.
