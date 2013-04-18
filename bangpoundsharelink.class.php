<?php

class bangpoundShareLink {

  public function __isset($name) {
    if ($name == 'requiredcontexts') {
      return TRUE;
    }
  }

  public function __get($name) {
    if ($name == 'requiredcontexts') {
      $return = array();
      if ($this->entity_type) {
        $return[] = array(
          'identifier' => 'Entity',
          'keyword' => $this->entity_type,
          'name' => 'entity:'. $this->entity_type,
          'entity_id' => '',
          'id' => 1,
        );
      }
      $return[] = array(
        'identifier' => 'View mode',
        'keyword' => 'string',
        'name' => 'string',
        'id' => 1,
      );
      return $return;
    }
  }
}
