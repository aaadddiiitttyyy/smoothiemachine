document.getElementById('smoothieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const size = document.getElementById('smoothieSize').value;
    const flavor = document.getElementById('smoothieFlavor').value;
    const addons = Array.from(document.querySelectorAll('input[name="addons"]:checked')).map(addon => addon.value);
    const customerName = document.getElementById('customerName').value;

    // Calculate price
    let price = 0;
    if (size === 'small') price = 5;
    if (size === 'medium') price = 7;
    if (size === 'large') price = 9;

    // Add add-ons price
    if (addons.includes('chiaSeeds')) price += 1.5;
    if (addons.includes('coconutFlakes')) price += 1;
    if (addons.includes('honey')) price += 0.75;

    // Update the order summary
    const orderDetails = `Customer: ${customerName}, Size: ${size}, Flavor: ${flavor}, Add-ons: ${addons.join(', ') || 'None'}`;
    const orderPrice = `Total Price: $${price.toFixed(2)}`;
    document.getElementById('orderDetails').textContent = orderDetails;
    document.getElementById('orderPrice').textContent = orderPrice;
    document.getElementById('customerNameSummary').textContent = `Customer Name: ${customerName}`;

    // Display appropriate image based on flavor
    const imageWrapper = document.getElementById('smoothieImageWrapper');
    const image = document.getElementById('smoothieImage');
    if (flavor === 'banana') {
        image.src = 'banana.webp';
    } else if (flavor === 'strawberry') {
        image.src = 'strawberry.png';
    } else if (flavor === 'mango') {
        image.src = 'mango.png';
    }

    // Show the order summary
    document.getElementById('orderSummary').classList.remove('hide');
});