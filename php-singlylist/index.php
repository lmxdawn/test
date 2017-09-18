<?php
/**
 * Created by PhpStorm.
 * User: Host-0034
 * Date: 2017/9/15
 * Time: 14:50
 */

// 查找单链表中倒数第k个元素


class SearchNode {  //定义单链表的节点
    public $data = '';
    public $next = null;
    function __construct($data)
    {
        $this->data = $data;
    }
}

/*
 * 添加节点
 * @param Node $head,mixed $data
 * @return null
 * */
function addNode ($head,$data) {
    $cur = $head;
    while (!is_null($cur->next)) {
        $cur = $cur->next;
    }
    $newNode = new SearchNode($data);
    $cur->next = $newNode;
}


/*
 * 统计单链表节点个数
 * @param Node $head
 * @return int $i
 * */
function countNode ($head) {
    $cur = $head;
    $i = 0;
    while (!is_null($cur->next)) {
        ++$i;
        $cur = $cur->next;
    }
    return $i;
}

/*
 * 查找单链表中倒数第k个元素
 * @param int $k, Node $head
 * @return mixed $data
 * */
function searchNode ($k,$head) {
    if ($k<=0||$k>countNode($head)) {
        return false;
    }
    $pre = $head;
    $cur = $head;
    $i = 0;
    while (!is_null($cur->next)) {
        ++$i;
        $cur = $cur->next;
        if ($i>$k) {
            $pre = $pre->next;
        }
    }
    $node = $pre->next;
    return $node->data;
}



$head = new SearchNode(null);
addNode($head,'a');
addNode($head,'b');
echo searchNode(2,$head);
echo '<pre>';
var_dump($head);
exit;
