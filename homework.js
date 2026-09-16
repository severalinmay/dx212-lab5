// คำนวณค่าโดยสารรถ NGV: 2 กม.แรก 10 บาท, กม.ถัดไป กม.ละ 2 บาท
// เศษของกิโลเมตรปัดขึ้น และระยะทางติดลบหรือไม่ใช่ตัวเลขให้คืน 0
const calcFare = (distanceKm) => {
  if (!Number.isFinite(distanceKm) || distanceKm < 0) {
    return 0;
  }

  const roundedDistance = Math.ceil(distanceKm);
  return roundedDistance <= 2 ? 10 : 10 + (roundedDistance - 2) * 2;
};

module.exports = { calcFare };