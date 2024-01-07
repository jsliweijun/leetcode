// 题目定义的链表节点
export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let lastNode: ListNode | null = null;
    let resList: ListNode | null = null;
    let ten = 0;
    let sum = 0;
    while (l1 != null || l2 != null || ten) {
        let l1Value = l1 ? l1.val : 0;
        let l2Value = l2 ? l2.val : 0;
        if (ten) {
            sum = l1Value + l2Value + ten;
        } else {
            sum = l1Value + l2Value;
        }
        if (sum < 10) {
            //     console.log(sum);
            let node = new ListNode(sum);
            if (resList == null) {
                resList = node;
                lastNode = resList;
            } else {
                lastNode!.next = node;
                lastNode = lastNode && lastNode.next;
            }
            ten = 0;
        } else {
            sum = parseInt(sum.toString().substring(1));
            //        console.log(sum);
            let node = new ListNode(sum);
            if (resList == null) {
                resList = node;
                lastNode = resList;
            } else {
                lastNode!.next = node;
                lastNode = lastNode!.next;
            }
            ten = 1;
            resList;
        }
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return resList;
}

/**
 * 重构
 * @param l1
 * @param l2
 */
export function addTwoNumbers2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let pre = new ListNode(0); // 头节点
    let cur = pre; // 当前节点
    let carry = 0;
    while (l1 != null || l2 != null || carry) {
        let x = l1 == null ? 0 : l1.val;
        let y = l2 == null ? 0 : l2.val;
        let sum = x + y + carry;

        // 进一位
        if (sum >= 10) {
            carry = 1;
        } else {
            carry = 0;
        }
        // 当前位置需要放的值 。之前使用这个方法 笨！  sum = parseInt(sum.toString().substring(1));
        sum = sum % 10;
        cur.next = new ListNode(sum);
        cur = cur.next;
        if (l1 != null) {
            l1 = l1.next;
        }
        if (l2 != null) {
            l2 = l2.next;
        }
    }
    return pre.next;
}

// let l1 = new ListNode(2);
// let l2 = new ListNode(5);

// let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

// addTwoNumbers(l1, l2);
//addTwoNumbers2(l1, l2);
