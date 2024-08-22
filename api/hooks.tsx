import {useState} from "react";

export function useApiX() {
  const [loading, setLoading] = useState()
  return {
    loading,
    data: {"hello": "World"}
  }
}
