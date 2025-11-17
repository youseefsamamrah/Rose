const flower = document.querySelector('.flower');
const petalCount = 18;

// إنشاء البتلات
for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const rotate = i * (360 / petalCount);
    petal.style.setProperty('--rotate', `${rotate}deg`);

    flower.insertBefore(petal, flower.firstChild);
}

// إنشاء التألق
for (let i = 0; i < 25; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 4}s`;
    flower.appendChild(sparkle);
}

// فتح الوردة
function bloomFlower() {
    const petals = document.querySelectorAll('.petal');
    const sparkles = document.querySelectorAll('.sparkle');
    
    petals.forEach((petal, index) => {
        setTimeout(() => {
            petal.style.animation = `bloom 2s ease-out forwards`;
            petal.style.opacity = "1";
        }, index * 120);
    });
    
    sparkles.forEach(sparkle => {
        sparkle.style.animation = `sparkle 3s ease-in-out infinite`;
    });
}

// إضافة تأثير الطفو
flower.classList.add('float');

// فتح الوردة عند التحميل
window.addEventListener('load', () => {
    setTimeout(bloomFlower, 500);
});

// مساكة hover على المركز
const center = document.querySelector('.center');
center.addEventListener('mouseover', () => {
    center.style.transform = 'translate(-50%, -50%) scale(1.15)';
});
center.addEventListener('mouseout', () => {
    center.style.transform = 'translate(-50%, -50%) scale(1)';
});
