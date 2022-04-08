/**
 * 121. 买卖股票的最佳时机
 *
 *
 */

// 超时
function maxProfit1(prices: number[]): number {
    let maxProfit: number = 0;
    for (let buy = 0; buy < prices.length; buy++) {
        for (let sell = buy + 1; sell < prices.length; sell++) {
            if (prices[sell] - prices[buy] > maxProfit) {
                maxProfit = prices[sell] - prices[buy];
            }
        }
    }
    return maxProfit;
}

// 把自己当做是在最低价卖入，之后每天计算利润
// 要在 第 i 天卖出利润最大，就需要在 第 i - n 天前的最低点买入，然后计算每 i 天的利润。
function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let minPrice: number = Number.MAX_VALUE;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
}
